import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { EnumSubscriptionStatusWithAggregatesFilterObjectSchema } from "./EnumSubscriptionStatusWithAggregatesFilter.schema"
import { SubscriptionStatusSchema } from "../enums/SubscriptionStatus.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => UserSubscriptionScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserSubscriptionScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => UserSubscriptionScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => UserSubscriptionScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => UserSubscriptionScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    subscriptionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    status: z
      .union([z.lazy(() => EnumSubscriptionStatusWithAggregatesFilterObjectSchema), z.lazy(() => SubscriptionStatusSchema)])
      .optional(),
    trialStartDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    trialEndDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    stripeSubscriptionId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    iapSubscriptionId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const UserSubscriptionScalarWhereWithAggregatesInputObjectSchema = Schema
