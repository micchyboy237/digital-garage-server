import { z } from "zod"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { PaymentFindManySchema } from "../findManyPayment.schema"
import { UserSubscriptionCountOutputTypeArgsObjectSchema } from "./UserSubscriptionCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionInclude> = z
  .object({
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserSubscriptionCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserSubscriptionIncludeObjectSchema = Schema
