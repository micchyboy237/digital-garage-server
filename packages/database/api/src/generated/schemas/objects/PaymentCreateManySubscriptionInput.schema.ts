import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateManySubscriptionInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    currency: z.string(),
    status: z.lazy(() => PaymentStatusSchema),
    transactionDate: z.coerce.date(),
  })
  .strict()

export const PaymentCreateManySubscriptionInputObjectSchema = Schema
