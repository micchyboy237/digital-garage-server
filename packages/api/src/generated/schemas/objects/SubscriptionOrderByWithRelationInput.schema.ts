import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { UserSubscriptionOrderByRelationAggregateInputObjectSchema } from "./UserSubscriptionOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    freeTrialDuration: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    currency: z.lazy(() => SortOrderSchema).optional(),
    paymentInterval: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userSubscriptions: z.lazy(() => UserSubscriptionOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionOrderByWithRelationInputObjectSchema = Schema
