import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumPaymentStatusFilter> = z
  .object({
    equals: z.lazy(() => PaymentStatusSchema).optional(),
    in: z.union([z.lazy(() => PaymentStatusSchema).array(), z.lazy(() => PaymentStatusSchema)]).optional(),
    notIn: z.union([z.lazy(() => PaymentStatusSchema).array(), z.lazy(() => PaymentStatusSchema)]).optional(),
    not: z.union([z.lazy(() => PaymentStatusSchema), z.lazy(() => NestedEnumPaymentStatusFilterObjectSchema)]).optional(),
  })
  .strict()

export const NestedEnumPaymentStatusFilterObjectSchema = Schema
