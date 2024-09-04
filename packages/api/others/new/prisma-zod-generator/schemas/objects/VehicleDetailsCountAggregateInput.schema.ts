import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    fromApi: z.literal(true).optional(),
    registrationNumber: z.literal(true).optional(),
    make: z.literal(true).optional(),
    model: z.literal(true).optional(),
    colour: z.literal(true).optional(),
    yearOfManufacture: z.literal(true).optional(),
    taxStatus: z.literal(true).optional(),
    taxDueDate: z.literal(true).optional(),
    motStatus: z.literal(true).optional(),
    motExpiryDate: z.literal(true).optional(),
    engineCapacity: z.literal(true).optional(),
    co2Emissions: z.literal(true).optional(),
    fuelType: z.literal(true).optional(),
    markedForExport: z.literal(true).optional(),
    typeApproval: z.literal(true).optional(),
    wheelplan: z.literal(true).optional(),
    artEndDate: z.literal(true).optional(),
    monthOfFirstRegistration: z.literal(true).optional(),
    euroStatus: z.literal(true).optional(),
    dateOfLastV5CIssued: z.literal(true).optional(),
    realDrivingEmissions: z.literal(true).optional(),
    revenueWeight: z.literal(true).optional(),
    ownershipId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const VehicleDetailsCountAggregateInputObjectSchema = Schema
