import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"
import { SubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateInput> = z
  .object({
    id: z.string().optional(),
    price: z.number(),
    currencyCode: z.string(),
    status: z.lazy(() => PaymentStatusSchema),
    transactionId: z.string(),
    transactionDate: z.coerce.date(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema).optional(),
  })
  .strict()

export const PaymentCreateInputObjectSchema = Schema
