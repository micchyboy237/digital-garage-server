import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentMaxOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    currency: z.lazy(() => SortOrderSchema).optional(),
    paymentDate: z.lazy(() => SortOrderSchema).optional(),
    userSubscriptionId: z.lazy(() => SortOrderSchema).optional(),
    stripePaymentId: z.lazy(() => SortOrderSchema).optional(),
    iapPaymentId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PaymentMaxOrderByAggregateInputObjectSchema = Schema
