import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { PaymentCountOrderByAggregateInputObjectSchema } from "./PaymentCountOrderByAggregateInput.schema"
import { PaymentAvgOrderByAggregateInputObjectSchema } from "./PaymentAvgOrderByAggregateInput.schema"
import { PaymentMaxOrderByAggregateInputObjectSchema } from "./PaymentMaxOrderByAggregateInput.schema"
import { PaymentMinOrderByAggregateInputObjectSchema } from "./PaymentMinOrderByAggregateInput.schema"
import { PaymentSumOrderByAggregateInputObjectSchema } from "./PaymentSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    currency: z.lazy(() => SortOrderSchema).optional(),
    paymentDate: z.lazy(() => SortOrderSchema).optional(),
    userSubscriptionId: z.lazy(() => SortOrderSchema).optional(),
    stripePaymentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    iapPaymentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => PaymentCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PaymentAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PaymentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PaymentMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PaymentSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PaymentOrderByWithAggregationInputObjectSchema = Schema
