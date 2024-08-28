import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    plan: z.literal(true).optional(),
    status: z.literal(true).optional(),
    startDate: z.literal(true).optional(),
    endDate: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict()

export const SubscriptionMaxAggregateInputObjectSchema = Schema
