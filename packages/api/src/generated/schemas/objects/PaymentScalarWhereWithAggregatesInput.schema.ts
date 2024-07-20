import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { FloatWithAggregatesFilterObjectSchema } from "./FloatWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => PaymentScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    amount: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
    currency: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    paymentDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    userSubscriptionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    stripePaymentId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    iapPaymentId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const PaymentScalarWhereWithAggregatesInputObjectSchema = Schema
