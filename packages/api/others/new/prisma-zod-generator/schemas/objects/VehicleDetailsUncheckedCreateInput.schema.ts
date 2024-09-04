import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    fromApi: z.boolean().optional(),
    registrationNumber: z.string(),
    make: z.string(),
    model: z.string(),
    colour: z.string(),
    yearOfManufacture: z.number(),
    taxStatus: z.string(),
    taxDueDate: z.coerce.date(),
    motStatus: z.string(),
    motExpiryDate: z.coerce.date().optional().nullable(),
    engineCapacity: z.number().optional().nullable(),
    co2Emissions: z.number().optional().nullable(),
    fuelType: z.string().optional().nullable(),
    markedForExport: z.boolean().optional().nullable(),
    typeApproval: z.string().optional().nullable(),
    wheelplan: z.string().optional().nullable(),
    artEndDate: z.coerce.date().optional().nullable(),
    monthOfFirstRegistration: z.coerce.date().optional().nullable(),
    euroStatus: z.string().optional().nullable(),
    dateOfLastV5CIssued: z.coerce.date().optional().nullable(),
    realDrivingEmissions: z.string().optional().nullable(),
    revenueWeight: z.number().optional().nullable(),
    ownershipId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleDetailsUncheckedCreateInputObjectSchema = Schema
