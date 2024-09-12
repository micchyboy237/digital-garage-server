import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehiclePostCountOrderByAggregateInputObjectSchema } from "./VehiclePostCountOrderByAggregateInput.schema"
import { VehiclePostMaxOrderByAggregateInputObjectSchema } from "./VehiclePostMaxOrderByAggregateInput.schema"
import { VehiclePostMinOrderByAggregateInputObjectSchema } from "./VehiclePostMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    ownershipId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VehiclePostCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehiclePostMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehiclePostMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostOrderByWithAggregationInputObjectSchema = Schema
