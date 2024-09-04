import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumSubscriptionPlanNullableFilterObjectSchema } from "./EnumSubscriptionPlanNullableFilter.schema"
import { SubscriptionPlanSchema } from "../enums/SubscriptionPlan.schema"
import { EnumSubscriptionStatusFilterObjectSchema } from "./EnumSubscriptionStatusFilter.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { PaymentListRelationFilterObjectSchema } from "./PaymentListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => SubscriptionWhereInputObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => SubscriptionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => SubscriptionWhereInputObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    productId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    plan: z
      .union([z.lazy(() => EnumSubscriptionPlanNullableFilterObjectSchema), z.lazy(() => SubscriptionPlanSchema)])
      .optional()
      .nullable(),
    status: z.union([z.lazy(() => EnumSubscriptionStatusFilterObjectSchema), z.lazy(() => SubscriptionStatusSchema)]).optional(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    expiresAt: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    user: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
    payments: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const SubscriptionWhereInputObjectSchema = Schema
