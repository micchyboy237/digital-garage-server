import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    title: z.literal(true).optional(),
    category: z.literal(true).optional(),
    description: z.literal(true).optional(),
    type: z.literal(true).optional(),
    createdById: z.literal(true).optional(),
    ownershipId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const VehiclePostMaxAggregateInputObjectSchema = Schema
