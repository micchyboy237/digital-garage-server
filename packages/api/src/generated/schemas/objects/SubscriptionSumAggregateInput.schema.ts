import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionSumAggregateInputType> = z
  .object({
    freeTrialDuration: z.literal(true).optional(),
    price: z.literal(true).optional(),
  })
  .strict()

export const SubscriptionSumAggregateInputObjectSchema = Schema
