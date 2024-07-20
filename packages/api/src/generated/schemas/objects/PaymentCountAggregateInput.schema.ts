import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCountAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    currency: z.literal(true).optional(),
    paymentDate: z.literal(true).optional(),
    userSubscriptionId: z.literal(true).optional(),
    stripePaymentId: z.literal(true).optional(),
    iapPaymentId: z.literal(true).optional(),
    _all: z.literal(true).optional(),
  })
  .strict()

export const PaymentCountAggregateInputObjectSchema = Schema
