import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { MediaFileCountOrderByAggregateInputObjectSchema } from "./MediaFileCountOrderByAggregateInput.schema"
import { MediaFileMaxOrderByAggregateInputObjectSchema } from "./MediaFileMaxOrderByAggregateInput.schema"
import { MediaFileMinOrderByAggregateInputObjectSchema } from "./MediaFileMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    documentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => MediaFileCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => MediaFileMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => MediaFileMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileOrderByWithAggregationInputObjectSchema = Schema
