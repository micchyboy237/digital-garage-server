import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsCreateManyInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    registrationNumber: z.string(),
    colour: z.string(),
    yearOfManufacture: z.number(),
    taxStatus: z.string(),
    taxDueDate: z.coerce.date(),
    motStatus: z.string(),
    engineCapacity: z.number(),
    co2Emissions: z.number(),
    fuelType: z.string(),
    markedForExport: z.boolean(),
    typeApproval: z.string(),
    wheelplan: z.string(),
    artEndDate: z.coerce.date().optional().nullable(),
    motExpiryDate: z.coerce.date().optional().nullable(),
    monthOfFirstRegistration: z.coerce.date().optional().nullable(),
    euroStatus: z.string().optional().nullable(),
    dateOfLastV5CIssued: z.coerce.date().optional().nullable(),
    realDrivingEmissions: z.string().optional().nullable(),
    revenueWeight: z.number().optional().nullable(),
  })
  .strict()

export const VehicleDetailsCreateManyInputObjectSchema = Schema
