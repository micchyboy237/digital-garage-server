import { z } from "zod"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { PaymentFindManySchema } from "../findManyPayment.schema"
import { UserSubscriptionCountOutputTypeArgsObjectSchema } from "./UserSubscriptionCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionSelect> = z
  .object({
    id: z.boolean().optional(),
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
    subscriptionId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    userId: z.boolean().optional(),
    status: z.boolean().optional(),
    trialStartDate: z.boolean().optional(),
    trialEndDate: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    stripeSubscriptionId: z.boolean().optional(),
    iapSubscriptionId: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserSubscriptionCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserSubscriptionSelectObjectSchema = Schema
