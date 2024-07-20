import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema"
import { FloatNullableWithAggregatesFilterObjectSchema } from "./FloatNullableWithAggregatesFilter.schema"
import { EnumPaymentIntervalWithAggregatesFilterObjectSchema } from "./EnumPaymentIntervalWithAggregatesFilter.schema"
import { PaymentIntervalSchema } from "../enums/PaymentInterval.schema"
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
    name: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    freeTrialDuration: z
      .union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    price: z
      .union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    currency: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    paymentInterval: z
      .union([z.lazy(() => EnumPaymentIntervalWithAggregatesFilterObjectSchema), z.lazy(() => PaymentIntervalSchema)])
      .optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const SubscriptionScalarWhereWithAggregatesInputObjectSchema = Schema
