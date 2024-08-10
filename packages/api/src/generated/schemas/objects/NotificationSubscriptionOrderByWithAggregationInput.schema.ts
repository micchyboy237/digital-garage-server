import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { NotificationSubscriptionCountOrderByAggregateInputObjectSchema } from "./NotificationSubscriptionCountOrderByAggregateInput.schema"
import { NotificationSubscriptionMaxOrderByAggregateInputObjectSchema } from "./NotificationSubscriptionMaxOrderByAggregateInput.schema"
import { NotificationSubscriptionMinOrderByAggregateInputObjectSchema } from "./NotificationSubscriptionMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    userId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => NotificationSubscriptionCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => NotificationSubscriptionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => NotificationSubscriptionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const NotificationSubscriptionOrderByWithAggregationInputObjectSchema = Schema
