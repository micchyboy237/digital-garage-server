import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { UserSubscriptionCountOrderByAggregateInputObjectSchema } from "./UserSubscriptionCountOrderByAggregateInput.schema"
import { UserSubscriptionMaxOrderByAggregateInputObjectSchema } from "./UserSubscriptionMaxOrderByAggregateInput.schema"
import { UserSubscriptionMinOrderByAggregateInputObjectSchema } from "./UserSubscriptionMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    subscriptionId: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    trialStartDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    trialEndDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    startDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    stripeSubscriptionId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    iapSubscriptionId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => UserSubscriptionCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => UserSubscriptionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => UserSubscriptionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionOrderByWithAggregationInputObjectSchema = Schema
