import { z } from "zod"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumSubscriptionStatusFilterObjectSchema } from "./NestedEnumSubscriptionStatusFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumSubscriptionStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => SubscriptionStatusSchema).optional(),
    in: z.union([z.lazy(() => SubscriptionStatusSchema).array(), z.lazy(() => SubscriptionStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => SubscriptionStatusSchema).array(), z.lazy(() => SubscriptionStatusSchema)]).optional(),
    not: z
      .union([z.lazy(() => SubscriptionStatusSchema), z.lazy(() => NestedEnumSubscriptionStatusWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSubscriptionStatusFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumSubscriptionStatusWithAggregatesFilterObjectSchema = Schema
