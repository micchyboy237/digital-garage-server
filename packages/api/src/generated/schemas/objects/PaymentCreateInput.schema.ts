import { z } from "zod"
import { UserSubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema } from "./UserSubscriptionCreateNestedOneWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    currency: z.string(),
    paymentDate: z.coerce.date().optional(),
    stripePaymentId: z.string().optional().nullable(),
    iapPaymentId: z.string().optional().nullable(),
    userSubscription: z.lazy(() => UserSubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema),
  })
  .strict()

export const PaymentCreateInputObjectSchema = Schema
