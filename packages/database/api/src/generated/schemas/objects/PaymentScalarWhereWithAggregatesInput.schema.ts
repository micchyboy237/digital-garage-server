import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { FloatWithAggregatesFilterObjectSchema } from "./FloatWithAggregatesFilter.schema"
import { EnumPaymentStatusWithAggregatesFilterObjectSchema } from "./EnumPaymentStatusWithAggregatesFilter.schema"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"

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
    status: z
      .union([z.lazy(() => EnumPaymentStatusWithAggregatesFilterObjectSchema), z.lazy(() => PaymentStatusSchema)])
      .optional(),
    transactionDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    subscriptionId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const PaymentScalarWhereWithAggregatesInputObjectSchema = Schema
