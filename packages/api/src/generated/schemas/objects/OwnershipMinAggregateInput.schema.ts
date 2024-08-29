import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    vehicleId: z.literal(true).optional(),
    isCurrentOwner: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
  })
  .strict()

export const OwnershipMinAggregateInputObjectSchema = Schema
