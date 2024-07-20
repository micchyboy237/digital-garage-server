import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    make: z.literal(true).optional(),
    model: z.literal(true).optional(),
    registrationNumber: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const VehicleCountAggregateInputObjectSchema = Schema
