import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { PaymentFindManySchema } from "../findManyPayment.schema"
import { SubscriptionCountOutputTypeArgsObjectSchema } from "./SubscriptionCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionSelect> = z
  .object({
    id: z.boolean().optional(),
    productId: z.boolean().optional(),
    plan: z.boolean().optional(),
    status: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => SubscriptionCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const SubscriptionSelectObjectSchema = Schema
