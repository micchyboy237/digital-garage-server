import { z } from "zod"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumSubscriptionStatusFilter> = z
  .object({
    equals: z.lazy(() => SubscriptionStatusSchema).optional(),
    in: z.union([z.lazy(() => SubscriptionStatusSchema).array(), z.lazy(() => SubscriptionStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => SubscriptionStatusSchema).array(), z.lazy(() => SubscriptionStatusSchema)]).optional(),
    not: z
      .union([z.lazy(() => SubscriptionStatusSchema), z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema)])
      .optional(),
  })
  .strict()

export const NestedEnumSubscriptionStatusFilterObjectSchema = Schema
