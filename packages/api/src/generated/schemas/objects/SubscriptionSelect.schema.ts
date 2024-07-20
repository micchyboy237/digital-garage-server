import { z } from "zod"
import { UserSubscriptionFindManySchema } from "../findManyUserSubscription.schema"
import { SubscriptionCountOutputTypeArgsObjectSchema } from "./SubscriptionCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionSelect> = z
  .object({
    id: z.boolean().optional(),
    name: z.boolean().optional(),
    freeTrialDuration: z.boolean().optional(),
    price: z.boolean().optional(),
    currency: z.boolean().optional(),
    paymentInterval: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userSubscriptions: z.union([z.boolean(), z.lazy(() => UserSubscriptionFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SubscriptionCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const SubscriptionSelectObjectSchema = Schema
