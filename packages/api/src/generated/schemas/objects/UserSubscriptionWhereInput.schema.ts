import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumSubscriptionStatusFilterObjectSchema } from "./EnumSubscriptionStatusFilter.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { SubscriptionRelationFilterObjectSchema } from "./SubscriptionRelationFilter.schema"
import { SubscriptionWhereInputObjectSchema } from "./SubscriptionWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { PaymentListRelationFilterObjectSchema } from "./PaymentListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => UserSubscriptionWhereInputObjectSchema), z.lazy(() => UserSubscriptionWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => UserSubscriptionWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => UserSubscriptionWhereInputObjectSchema), z.lazy(() => UserSubscriptionWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    subscriptionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    status: z.union([z.lazy(() => EnumSubscriptionStatusFilterObjectSchema), z.lazy(() => SubscriptionStatusSchema)]).optional(),
    trialStartDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    trialEndDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    stripeSubscriptionId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    iapSubscriptionId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    subscription: z
      .union([z.lazy(() => SubscriptionRelationFilterObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema)])
      .optional(),
    user: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
    payments: z.lazy(() => PaymentListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionWhereInputObjectSchema = Schema
