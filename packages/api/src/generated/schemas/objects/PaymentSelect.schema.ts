import { z } from "zod"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentSelect> = z
  .object({
    id: z.boolean().optional(),
    price: z.boolean().optional(),
    currencyCode: z.boolean().optional(),
    status: z.boolean().optional(),
    transactionId: z.boolean().optional(),
    transactionDate: z.boolean().optional(),
    subscriptionId: z.boolean().optional(),
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const PaymentSelectObjectSchema = Schema
