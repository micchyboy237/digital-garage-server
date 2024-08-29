import { TRPCError } from "@trpc/server"
import fetch from "node-fetch"
import { z } from "zod"
import { protectedProcedure, t } from "../trpc"

// Define the TypeScript interface for the DVLA API response
interface DVLAApiResponse {
  registrationNumber: string
  taxStatus: string
  taxDueDate: string | null
  motStatus: string
  make: string
  yearOfManufacture: number
  engineCapacity: number
  co2Emissions: number
  fuelType: string
  markedForExport: boolean
  colour: string
  wheelplan: string
  typeApproval: string
  motExpiryDate?: string | null
  euroStatus?: string | null
  dateOfLastV5CIssued?: string | null
  monthOfFirstRegistration?: string | null
  artEndDate?: string | null
  realDrivingEmissions?: string | null
  revenueWeight?: number | null
}

// Define the schema for the input validation using Zod
const addVehicleDetailsSchema = z.object({
  registrationNumber: z.string(),
})

export const vehicleRouter = t.router({
  addDVLADetails: protectedProcedure.input(addVehicleDetailsSchema).mutation(async ({ ctx, input }) => {
    // Remove spaces from the registration number
    const registrationNumber = "RJ63 WTE".replace(/\s/g, "")
    // Check if the vehicle details with the registration number already exist
    const existingVehicleDetails = await ctx.prisma.vehicleDetails.findFirst({
      where: { registrationNumber },
    })

    console.log("Existing vehicle details:", {
      registrationNumber,
      existingVehicleDetails,
    })

    if (!existingVehicleDetails) {
      // Fetch vehicle details from the external API
      const vehicleDetails = await fetchVehicleData({
        registrationNumber: input.registrationNumber,
      })

      // Create a new vehicle details record with all relevant fields
      const newVehicleDetails = await ctx.prisma.vehicleDetails.create({
        data: {
          registrationNumber,
          make: vehicleDetails.make,
          colour: vehicleDetails.colour,
          yearOfManufacture: vehicleDetails.yearOfManufacture,
          taxStatus: vehicleDetails.taxStatus,
          taxDueDate: transformDate(vehicleDetails.taxDueDate),
          motStatus: vehicleDetails.motStatus,
          engineCapacity: vehicleDetails.engineCapacity,
          co2Emissions: vehicleDetails.co2Emissions,
          fuelType: vehicleDetails.fuelType,
          markedForExport: vehicleDetails.markedForExport,
          typeApproval: vehicleDetails.typeApproval,
          wheelplan: vehicleDetails.wheelplan,
          euroStatus: vehicleDetails.euroStatus || null,
          dateOfLastV5CIssued: transformDate(vehicleDetails.dateOfLastV5CIssued),
          monthOfFirstRegistration: transformDate(vehicleDetails.monthOfFirstRegistration),
          artEndDate: transformDate(vehicleDetails.artEndDate),
          motExpiryDate: transformDate(vehicleDetails.motExpiryDate),
          realDrivingEmissions: vehicleDetails.realDrivingEmissions || null,
          revenueWeight: vehicleDetails.revenueWeight || null,
        },
      })

      return newVehicleDetails
    }

    throw new TRPCError({ code: "BAD_REQUEST", message: "Vehicle details already exist" })
  }),
})

const transformDate = (date?: string | null) => {
  let value = null
  try {
    if (!date) {
      throw new Error("DVLA has an empty date attribute")
    }
    value = new Date(date)
  } catch (error) {
    console.error(error)
  }
  return value
}

// Function to fetch vehicle data from the external API
const fetchVehicleData = async ({ registrationNumber }: { registrationNumber: string }): Promise<DVLAApiResponse> => {
  const response = await fetch("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles", {
    method: "POST",
    headers: {
      "x-api-key": "1x9gAFNoBFkL9lMpL07K14LSEFPkuvr20bzcjAd6",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ registrationNumber }),
  })
  const data = (await response.json()) as DVLAApiResponse

  return {
    registrationNumber: data.registrationNumber,
    make: data.make,
    colour: data.colour,
    yearOfManufacture: data.yearOfManufacture,
    taxStatus: data.taxStatus,
    taxDueDate: data.taxDueDate,
    motStatus: data.motStatus,
    engineCapacity: data.engineCapacity,
    co2Emissions: data.co2Emissions,
    fuelType: data.fuelType,
    markedForExport: data.markedForExport,
    typeApproval: data.typeApproval,
    euroStatus: data.euroStatus || null,
    dateOfLastV5CIssued: data.dateOfLastV5CIssued ? data.dateOfLastV5CIssued : null,
    wheelplan: data.wheelplan,
    monthOfFirstRegistration: data.monthOfFirstRegistration ? data.monthOfFirstRegistration : null,
    artEndDate: data.artEndDate || null,
    motExpiryDate: data.motExpiryDate || null,
    realDrivingEmissions: data.realDrivingEmissions || null,
    revenueWeight: data.revenueWeight || null,
  }
}
