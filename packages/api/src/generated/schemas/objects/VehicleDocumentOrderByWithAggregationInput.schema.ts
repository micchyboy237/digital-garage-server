import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehicleDocumentCountOrderByAggregateInputObjectSchema } from "./VehicleDocumentCountOrderByAggregateInput.schema"
import { VehicleDocumentMaxOrderByAggregateInputObjectSchema } from "./VehicleDocumentMaxOrderByAggregateInput.schema"
import { VehicleDocumentMinOrderByAggregateInputObjectSchema } from "./VehicleDocumentMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fileUrl: z.lazy(() => SortOrderSchema).optional(),
    mimeType: z.lazy(() => SortOrderSchema).optional(),
    postId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    ownershipId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => VehicleDocumentCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehicleDocumentMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehicleDocumentMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentOrderByWithAggregationInputObjectSchema = Schema
