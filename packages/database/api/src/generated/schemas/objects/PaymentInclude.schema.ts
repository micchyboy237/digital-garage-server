import { z } from "zod"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentInclude> = z
  .object({
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
  })
  .strict()

export const PaymentIncludeObjectSchema = Schema
