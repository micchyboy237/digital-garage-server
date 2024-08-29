import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { OwnershipCountOrderByAggregateInputObjectSchema } from "./OwnershipCountOrderByAggregateInput.schema"
import { OwnershipMaxOrderByAggregateInputObjectSchema } from "./OwnershipMaxOrderByAggregateInput.schema"
import { OwnershipMinOrderByAggregateInputObjectSchema } from "./OwnershipMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    isCurrentOwner: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    excludedPosts: z.lazy(() => SortOrderSchema).optional(),
    excludedPhotos: z.lazy(() => SortOrderSchema).optional(),
    excludedDocs: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => OwnershipCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => OwnershipMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => OwnershipMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipOrderByWithAggregationInputObjectSchema = Schema
