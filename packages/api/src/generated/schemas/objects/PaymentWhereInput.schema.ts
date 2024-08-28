import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { FloatFilterObjectSchema } from "./FloatFilter.schema"
import { EnumPaymentStatusFilterObjectSchema } from "./EnumPaymentStatusFilter.schema"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { SubscriptionRelationFilterObjectSchema } from "./SubscriptionRelationFilter.schema"
import { SubscriptionWhereInputObjectSchema } from "./SubscriptionWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => PaymentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => PaymentWhereInputObjectSchema), z.lazy(() => PaymentWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    price: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    currencyCode: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    status: z.union([z.lazy(() => EnumPaymentStatusFilterObjectSchema), z.lazy(() => PaymentStatusSchema)]).optional(),
    transactionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    transactionDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    subscriptionId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    subscription: z
      .union([z.lazy(() => SubscriptionRelationFilterObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const PaymentWhereInputObjectSchema = Schema
