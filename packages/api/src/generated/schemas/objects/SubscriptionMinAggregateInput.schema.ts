import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    name: z.literal(true).optional(),
    freeTrialDuration: z.literal(true).optional(),
    price: z.literal(true).optional(),
    currency: z.literal(true).optional(),
    paymentInterval: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const SubscriptionMinAggregateInputObjectSchema = Schema
