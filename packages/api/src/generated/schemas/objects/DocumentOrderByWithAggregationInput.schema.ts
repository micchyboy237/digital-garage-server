import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { DocumentCountOrderByAggregateInputObjectSchema } from "./DocumentCountOrderByAggregateInput.schema"
import { DocumentAvgOrderByAggregateInputObjectSchema } from "./DocumentAvgOrderByAggregateInput.schema"
import { DocumentMaxOrderByAggregateInputObjectSchema } from "./DocumentMaxOrderByAggregateInput.schema"
import { DocumentMinOrderByAggregateInputObjectSchema } from "./DocumentMinOrderByAggregateInput.schema"
import { DocumentSumOrderByAggregateInputObjectSchema } from "./DocumentSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    displayDate: z.lazy(() => SortOrderSchema).optional(),
    header: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    invoiceValue: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => DocumentCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => DocumentAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => DocumentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => DocumentMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => DocumentSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DocumentOrderByWithAggregationInputObjectSchema = Schema
