import { z } from "zod"
import { UserSubscriptionFindManySchema } from "../findManyUserSubscription.schema"
import { SubscriptionCountOutputTypeArgsObjectSchema } from "./SubscriptionCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionInclude> = z
  .object({
    userSubscriptions: z.union([z.boolean(), z.lazy(() => UserSubscriptionFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SubscriptionCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const SubscriptionIncludeObjectSchema = Schema
