import { z } from "zod"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumSubscriptionPlanNullableFilter> = z
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
      .union([z.lazy(() => SubscriptionPlanSchema), z.lazy(() => NestedEnumSubscriptionPlanNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const NestedEnumSubscriptionPlanNullableFilterObjectSchema = Schema
