import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { IntNullableFilterObjectSchema } from "./IntNullableFilter.schema"
import { FloatNullableFilterObjectSchema } from "./FloatNullableFilter.schema"
import { EnumPaymentIntervalFilterObjectSchema } from "./EnumPaymentIntervalFilter.schema"
import { PaymentIntervalSchema } from "../enums/PaymentInterval.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { UserSubscriptionListRelationFilterObjectSchema } from "./UserSubscriptionListRelationFilter.schema"

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
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    freeTrialDuration: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    price: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    currency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    paymentInterval: z
      .union([z.lazy(() => EnumPaymentIntervalFilterObjectSchema), z.lazy(() => PaymentIntervalSchema)])
      .optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    userSubscriptions: z.lazy(() => UserSubscriptionListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const SubscriptionWhereInputObjectSchema = Schema
