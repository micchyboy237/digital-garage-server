import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { PhotoCountOrderByAggregateInputObjectSchema } from "./PhotoCountOrderByAggregateInput.schema"
import { PhotoMaxOrderByAggregateInputObjectSchema } from "./PhotoMaxOrderByAggregateInput.schema"
import { PhotoMinOrderByAggregateInputObjectSchema } from "./PhotoMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    thumbnailUrl: z.lazy(() => SortOrderSchema).optional(),
    postId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    ownershipId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => PhotoCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PhotoMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PhotoMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PhotoOrderByWithAggregationInputObjectSchema = Schema
