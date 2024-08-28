import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { PaymentFindManySchema } from "../findManyPayment.schema"
import { SubscriptionCountOutputTypeArgsObjectSchema } from "./SubscriptionCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    payments: z.union([z.boolean(), z.lazy(() => PaymentFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => SubscriptionCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const SubscriptionIncludeObjectSchema = Schema
