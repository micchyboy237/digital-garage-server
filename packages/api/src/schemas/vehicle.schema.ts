import { z } from "zod"

// Define the schema for the input validation using Zod
export const addVehicleDetailsSchema = z.object({
  registrationNumber: z.string(),
})

export const addOrUpdateVehicleDetailsSchema = z.object({
  registrationNumber: z.string(),
  make: z.string(),
  colour: z.string(),
  yearOfManufacture: z.number(),
  taxStatus: z.string(),
  taxDueDate: z.date().optional(),
  motStatus: z.string(),
  engineCapacity: z.number(),
  co2Emissions: z.number(),
  fuelType: z.string(),
  markedForExport: z.boolean(),
  typeApproval: z.string(),
  wheelplan: z.string(),
  euroStatus: z.string().optional(),
  dateOfLastV5CIssued: z.date().optional(),
  monthOfFirstRegistration: z.date().optional(),
  artEndDate: z.date().optional(),
  motExpiryDate: z.date().optional(),
  realDrivingEmissions: z.string().optional(),
  revenueWeight: z.number().optional(),
})

export const uploadVehicleDetailsSchema = z.object({
  id: z.string(),
  fromApi: z.boolean(),
  registrationNumber: z.string(),
  make: z.string(),
  model: z.string(),
  colour: z.string(),
  yearOfManufacture: z.number().int(),
  taxStatus: z.string(),
  taxDueDate: z.date(),
  motStatus: z.string(),
  motExpiryDate: z.date().nullish(),
  engineCapacity: z.number().int().nullish(),
  co2Emissions: z.number().int().nullish(),
  fuelType: z.string().nullish(),
  markedForExport: z.boolean().nullish(),
  typeApproval: z.string().nullish(),
  wheelplan: z.string().nullish(),
  artEndDate: z.date().nullish(),
  monthOfFirstRegistration: z.date().nullish(),
  euroStatus: z.string().nullish(),
  dateOfLastV5CIssued: z.date().nullish(),
  realDrivingEmissions: z.string().nullish(),
  revenueWeight: z.number().int().nullish(),
  createdAt: z.date(),
  updatedAt: z.date(),
})
