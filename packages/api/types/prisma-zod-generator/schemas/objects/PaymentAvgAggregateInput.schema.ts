import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentAvgAggregateInputType> = z
  .object({
    price: z.literal(true).optional(),
  })
  .strict()

export const PaymentAvgAggregateInputObjectSchema = Schema
