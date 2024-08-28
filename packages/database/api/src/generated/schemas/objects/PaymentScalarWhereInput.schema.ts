import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { FloatFilterObjectSchema } from "./FloatFilter.schema"
import { EnumPaymentStatusFilterObjectSchema } from "./EnumPaymentStatusFilter.schema"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"

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
    status: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), z.lazy(() => PaymentStatusSchema)]).optional(),
    transactionDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    subscriptionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const PaymentScalarWhereInputObjectSchema = Schema
