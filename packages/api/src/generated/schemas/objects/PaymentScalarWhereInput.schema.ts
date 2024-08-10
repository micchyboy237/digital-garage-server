import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { FloatFilterObjectSchema } from "./FloatFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => PaymentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    amount: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    currency: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    paymentDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    userSubscriptionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    stripePaymentId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    iapPaymentId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const PaymentScalarWhereInputObjectSchema = Schema
