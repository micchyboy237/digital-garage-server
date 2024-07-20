import { z } from "zod"
import { UserSubscriptionArgsObjectSchema } from "./UserSubscriptionArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentSelect> = z
  .object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    currency: z.boolean().optional(),
    paymentDate: z.boolean().optional(),
    userSubscriptionId: z.boolean().optional(),
    userSubscription: z.union([z.boolean(), z.lazy(() => UserSubscriptionArgsObjectSchema)]).optional(),
    stripePaymentId: z.boolean().optional(),
    iapPaymentId: z.boolean().optional(),
  })
  .strict()

export const PaymentSelectObjectSchema = Schema
