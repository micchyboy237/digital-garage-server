import { z } from "zod"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentSelect> = z
  .object({
    id: z.boolean().optional(),
    amount: z.boolean().optional(),
    currency: z.boolean().optional(),
    status: z.boolean().optional(),
    transactionDate: z.boolean().optional(),
    subscriptionId: z.boolean().optional(),
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
  })
  .strict()

export const PaymentSelectObjectSchema = Schema
