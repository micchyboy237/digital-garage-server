import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { FloatFilterObjectSchema } from "./FloatFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { UserSubscriptionRelationFilterObjectSchema } from "./UserSubscriptionRelationFilter.schema"
import { UserSubscriptionWhereInputObjectSchema } from "./UserSubscriptionWhereInput.schema"

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
    userSubscription: z
      .union([z.lazy(() => UserSubscriptionRelationFilterObjectSchema), z.lazy(() => UserSubscriptionWhereInputObjectSchema)])
      .optional(),
  })
  .strict()

export const PaymentWhereInputObjectSchema = Schema
