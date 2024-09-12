import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"
import { NestedEnumPaymentStatusWithAggregatesFilterObjectSchema } from "./NestedEnumPaymentStatusWithAggregatesFilter.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumPaymentStatusFilterObjectSchema } from "./NestedEnumPaymentStatusFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumPaymentStatusWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PaymentStatusSchema).optional(),
    in: z.union([z.lazy(() => PaymentStatusSchema).array(), z.lazy(() => PaymentStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => PaymentStatusSchema).array(), z.lazy(() => PaymentStatusSchema)]).optional(),
    not: z
      .union([z.lazy(() => PaymentStatusSchema), z.lazy(() => NestedEnumPaymentStatusWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPaymentStatusFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPaymentStatusFilterObjectSchema).optional(),
  })
  .strict()

export const EnumPaymentStatusWithAggregatesFilterObjectSchema = Schema
