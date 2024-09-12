import { z } from "zod"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"
import { NestedEnumSubscriptionPlanNullableWithAggregatesFilterObjectSchema } from "./NestedEnumSubscriptionPlanNullableWithAggregatesFilter.schema"
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema"
import { NestedEnumSubscriptionPlanNullableFilterObjectSchema } from "./NestedEnumSubscriptionPlanNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumSubscriptionPlanNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => SubscriptionPlanSchema)
      .optional()
      .nullable(),
    in: z
      .union([z.lazy(() => SubscriptionPlanSchema).array(), z.lazy(() => SubscriptionPlanSchema)])
      .optional()
      .nullable(),
    notIn: z
      .union([z.lazy(() => SubscriptionPlanSchema).array(), z.lazy(() => SubscriptionPlanSchema)])
      .optional()
      .nullable(),
    not: z
      .union([
        z.lazy(() => SubscriptionPlanSchema),
        z.lazy(() => NestedEnumSubscriptionPlanNullableWithAggregatesFilterObjectSchema),
      ])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumSubscriptionPlanNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumSubscriptionPlanNullableFilterObjectSchema).optional(),
  })
  .strict()

export const EnumSubscriptionPlanNullableWithAggregatesFilterObjectSchema = Schema
