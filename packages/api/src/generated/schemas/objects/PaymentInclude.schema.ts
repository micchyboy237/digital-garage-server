import { z } from "zod"
import { UserSubscriptionArgsObjectSchema } from "./UserSubscriptionArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentInclude> = z
  .object({
    userSubscription: z.union([z.boolean(), z.lazy(() => UserSubscriptionArgsObjectSchema)]).optional(),
  })
  .strict()

export const PaymentIncludeObjectSchema = Schema
