import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { UserSubscriptionOrderByWithRelationInputObjectSchema } from "./UserSubscriptionOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    amount: z.lazy(() => SortOrderSchema).optional(),
    currency: z.lazy(() => SortOrderSchema).optional(),
    paymentDate: z.lazy(() => SortOrderSchema).optional(),
    userSubscriptionId: z.lazy(() => SortOrderSchema).optional(),
    stripePaymentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    iapPaymentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    userSubscription: z.lazy(() => UserSubscriptionOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const PaymentOrderByWithRelationInputObjectSchema = Schema
