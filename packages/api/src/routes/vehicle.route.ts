import { multerUpload, S3File, uploadImageAndThumbnail } from "@boilerplate/aws"
import { MediaFileType } from "@boilerplate/database"
import { TRPCError } from "@trpc/server"
import fetch from "node-fetch"
import { ValidationException } from "../exceptions"
import { addOrUpdateVehicleDetailsSchema, addVehicleDetailsSchema, uploadVehicleDetailsSchema } from "../schemas/vehicle.schema"
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

export const vehicleRouter = t.router({
  getVehicles: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.vehicle.findMany({
      include: { transfers: true, details: true },
    })
  }),
  addOrUpdateVehicleDetails: protectedProcedure.input(addOrUpdateVehicleDetailsSchema).mutation(async ({ ctx, input }) => {
    // Remove spaces from the registration number
    const registrationNumber = input.registrationNumber.replace(/\s/g, "")

    // Check if the vehicle details with the registration number already exist
    const existingVehicleDetails = await ctx.prisma.vehicleDetails.findFirst({
      where: { registrationNumber },
    })

    if (existingVehicleDetails) {
      // Update existing vehicle details with new data
      const updatedVehicleDetails = await ctx.prisma.vehicleDetails.update({
        where: { registrationNumber },
        data: {
          make: input.make,
          colour: input.colour,
          yearOfManufacture: input.yearOfManufacture,
          taxStatus: input.taxStatus,
          taxDueDate: input.taxDueDate || null,
          motStatus: input.motStatus,
          engineCapacity: input.engineCapacity,
          co2Emissions: input.co2Emissions,
          fuelType: input.fuelType,
          markedForExport: input.markedForExport,
          typeApproval: input.typeApproval,
          wheelplan: input.wheelplan,
          euroStatus: input.euroStatus || null,
          dateOfLastV5CIssued: input.dateOfLastV5CIssued || null,
          monthOfFirstRegistration: input.monthOfFirstRegistration || null,
          artEndDate: input.artEndDate || null,
          motExpiryDate: input.motExpiryDate || null,
          realDrivingEmissions: input.realDrivingEmissions || null,
          revenueWeight: input.revenueWeight || null,
        },
      })

      return updatedVehicleDetails
    }

    // If vehicle details do not exist, create new details
    const newVehicleDetails = await ctx.prisma.vehicleDetails.create({
      data: {
        registrationNumber,
        make: input.make,
        colour: input.colour,
        yearOfManufacture: input.yearOfManufacture,
        taxStatus: input.taxStatus,
        taxDueDate: input.taxDueDate || null,
        motStatus: input.motStatus,
        engineCapacity: input.engineCapacity,
        co2Emissions: input.co2Emissions,
        fuelType: input.fuelType,
        markedForExport: input.markedForExport,
        typeApproval: input.typeApproval,
        wheelplan: input.wheelplan,
        euroStatus: input.euroStatus || null,
        dateOfLastV5CIssued: input.dateOfLastV5CIssued || null,
        monthOfFirstRegistration: input.monthOfFirstRegistration || null,
        artEndDate: input.artEndDate || null,
        motExpiryDate: input.motExpiryDate || null,
        realDrivingEmissions: input.realDrivingEmissions || null,
        revenueWeight: input.revenueWeight || null,
      },
    })

    return newVehicleDetails
  }),

  addDVLADetails: protectedProcedure.input(addVehicleDetailsSchema).mutation(async ({ ctx, input }) => {
    const registrationNumber = input.registrationNumber
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
        registrationNumber,
      })

      if (!vehicleDetails) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "Vehicle details not found" })
      }

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

  uploadVehicleDetails: protectedProcedure.input(uploadVehicleDetailsSchema).mutation(async ({ input, ctx }) => {
    try {
      const uploadSingle = multerUpload.single("displayPhoto")
      // Handle file upload using Multer
      await new Promise<void>((resolve, reject) => {
        uploadSingle(ctx.req, ctx.res, (err) => {
          if (err) {
            return reject(new TRPCError({ code: "BAD_REQUEST", message: "Error uploading file" }))
          }
          resolve()
        })
      })

      const { file, folder } = ctx.req as { file: Express.Multer.File | undefined; folder?: string } // Ensure type safety for req file
      const { registrationNumber } = input

      if (!file) {
        throw new TRPCError({ code: "BAD_REQUEST", message: "No file uploaded" })
      }

      const s3File: S3File = {
        originalname: file.originalname,
        buffer: file.buffer,
      }

      const { imageUrl, thumbnailUrl } = await uploadImageAndThumbnail(s3File, folder)

      // Perform a transaction to save vehicle details and image URLs using Prisma
      const vehicle = await ctx.prisma.$transaction(async (prisma) => {
        const createdVehicle = await prisma.vehicle.create({
          data: {
            make: input.make,
            model: input.model,
            registrationNumber,
            ownerId: ctx.session?.userId!,
            createdAt: input.createdAt,
            updatedAt: input.updatedAt,
          },
        })

        await prisma.mediaFile.create({
          data: {
            url: imageUrl,
            thumbnailUrl,
            fileName: file.originalname,
            type: MediaFileType.IMAGE,
            mimeType: file.mimetype,
          },
        })

        await prisma.vehicleOwnership.create({
          data: {
            userId: ctx.session?.userId!,
            vehicleId: createdVehicle.id,
          },
        })

        return createdVehicle
      })

      return { success: true, vehicle }
    } catch (error) {
      if (error instanceof ValidationException) {
        throw new TRPCError({ code: "BAD_REQUEST", message: error.message })
      }
      console.error("Error uploading to S3 or saving to database:", error)
      throw new TRPCError({ code: "INTERNAL_SERVER_ERROR", message: "Error processing request" })
    }
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
const fetchVehicleData = async ({ registrationNumber }: { registrationNumber: string }): Promise<DVLAApiResponse | null> => {
  const response = await fetch("https://driver-vehicle-licensing.api.gov.uk/vehicle-enquiry/v1/vehicles", {
    method: "POST",
    headers: {
      "x-api-key": "1x9gAFNoBFkL9lMpL07K14LSEFPkuvr20bzcjAd6",
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ registrationNumber }),
  })

  if (!response.ok) {
    return null
  }

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
