import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { SubscriptionCountOrderByAggregateInputObjectSchema } from "./SubscriptionCountOrderByAggregateInput.schema"
import { SubscriptionMaxOrderByAggregateInputObjectSchema } from "./SubscriptionMaxOrderByAggregateInput.schema"
import { SubscriptionMinOrderByAggregateInputObjectSchema } from "./SubscriptionMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    plan: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SubscriptionCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SubscriptionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SubscriptionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionOrderByWithAggregationInputObjectSchema = Schema
