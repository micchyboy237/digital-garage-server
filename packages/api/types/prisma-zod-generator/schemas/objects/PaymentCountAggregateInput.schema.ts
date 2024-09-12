import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    price: z.literal(true).optional(),
    currencyCode: z.literal(true).optional(),
    status: z.literal(true).optional(),
    transactionId: z.literal(true).optional(),
    transactionDate: z.literal(true).optional(),
    subscriptionId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PaymentCountAggregateInputObjectSchema = Schema
