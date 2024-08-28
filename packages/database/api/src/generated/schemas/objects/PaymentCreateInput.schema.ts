import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"
import { SubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    currency: z.string(),
    status: z.lazy(() => PaymentStatusSchema),
    transactionDate: z.coerce.date(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema).optional(),
  })
  .strict()

export const PaymentCreateInputObjectSchema = Schema
