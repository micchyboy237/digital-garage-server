import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SubscriptionOrderByWithRelationInputObjectSchema } from "./SubscriptionOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
    currencyCode: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    transactionId: z.lazy(() => SortOrderSchema).optional(),
    transactionDate: z.lazy(() => SortOrderSchema).optional(),
    subscriptionId: z.lazy(() => SortOrderSchema).optional(),
    subscription: z.lazy(() => SubscriptionOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const PaymentOrderByWithRelationInputObjectSchema = Schema
