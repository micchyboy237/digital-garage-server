import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    productId: z.literal(true).optional(),
    plan: z.literal(true).optional(),
    status: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const SubscriptionCountAggregateInputObjectSchema = Schema
