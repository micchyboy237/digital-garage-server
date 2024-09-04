import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { VehicleCountOrderByAggregateInputObjectSchema } from "./VehicleCountOrderByAggregateInput.schema"
import { VehicleMaxOrderByAggregateInputObjectSchema } from "./VehicleMaxOrderByAggregateInput.schema"
import { VehicleMinOrderByAggregateInputObjectSchema } from "./VehicleMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VehicleCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehicleMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehicleMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOrderByWithAggregationInputObjectSchema = Schema
