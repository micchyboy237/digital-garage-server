import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUncheckedCreateWithoutOwnershipInput> = z
  .object({
    id: z.string().optional(),
    fromApi: z.boolean().optional(),
    registrationNumber: z.string(),
    make: z.string(),
    model: z.string(),
    yearOfManufacture: z.number(),
    engineCapacity: z.number(),
    fuelType: z.string(),
    colour: z.string(),
    taxStatus: z.string().optional().nullable(),
    taxDueDate: z.coerce.date().optional().nullable(),
    motStatus: z.string().optional().nullable(),
    motExpiryDate: z.coerce.date().optional().nullable(),
    co2Emissions: z.number().optional().nullable(),
    markedForExport: z.boolean().optional().nullable(),
    typeApproval: z.string().optional().nullable(),
    wheelplan: z.string().optional().nullable(),
    artEndDate: z.coerce.date().optional().nullable(),
    monthOfFirstRegistration: z.coerce.date().optional().nullable(),
    euroStatus: z.string().optional().nullable(),
    dateOfLastV5CIssued: z.coerce.date().optional().nullable(),
    realDrivingEmissions: z.string().optional().nullable(),
    revenueWeight: z.number().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const VehicleDetailsUncheckedCreateWithoutOwnershipInputObjectSchema = Schema
