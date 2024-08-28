import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateManySubscriptionInput> = z
  .object({
    id: z.string().optional(),
    price: z.number(),
    currencyCode: z.string(),
    status: z.lazy(() => PaymentStatusSchema),
    transactionId: z.string(),
    transactionDate: z.coerce.date(),
  })
  .strict()

export const PaymentCreateManySubscriptionInputObjectSchema = Schema
