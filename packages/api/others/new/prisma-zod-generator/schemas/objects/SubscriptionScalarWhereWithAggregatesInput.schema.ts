import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { EnumSubscriptionPlanNullableWithAggregatesFilterObjectSchema } from "./EnumSubscriptionPlanNullableWithAggregatesFilter.schema"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"
import { EnumSubscriptionStatusWithAggregatesFilterObjectSchema } from "./EnumSubscriptionStatusWithAggregatesFilter.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => SubscriptionScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    plan: z
      .union([z.lazy(() => EnumSubscriptionPlanNullableWithAggregatesFilterObjectSchema), z.lazy(() => SubscriptionPlanSchema)])
      .optional()
      .nullable(),
    status: z
      .union([z.lazy(() => EnumSubscriptionStatusWithAggregatesFilterObjectSchema), z.lazy(() => SubscriptionStatusSchema)])
      .optional(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    expiresAt: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const SubscriptionScalarWhereWithAggregatesInputObjectSchema = Schema
