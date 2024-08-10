import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { DocumentCountOrderByAggregateInputObjectSchema } from "./DocumentCountOrderByAggregateInput.schema"
import { DocumentMaxOrderByAggregateInputObjectSchema } from "./DocumentMaxOrderByAggregateInput.schema"
import { DocumentMinOrderByAggregateInputObjectSchema } from "./DocumentMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    title: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    vehicleEventId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => DocumentCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DocumentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DocumentMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DocumentOrderByWithAggregationInputObjectSchema = Schema
