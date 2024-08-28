import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    amount: z.literal(true).optional(),
    currency: z.literal(true).optional(),
    status: z.literal(true).optional(),
    transactionDate: z.literal(true).optional(),
    subscriptionId: z.literal(true).optional(),
  })
  .strict()

export const PaymentMinAggregateInputObjectSchema = Schema
