import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    type: z.literal(true).optional(),
    header: z.literal(true).optional(),
    description: z.literal(true).optional(),
    date: z.literal(true).optional(),
    price: z.literal(true).optional(),
    vehicleId: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
    vehicleOwnershipId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const VehicleEventMinAggregateInputObjectSchema = Schema
