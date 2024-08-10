import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehicleEventCountOrderByAggregateInputObjectSchema } from "./VehicleEventCountOrderByAggregateInput.schema"
import { VehicleEventAvgOrderByAggregateInputObjectSchema } from "./VehicleEventAvgOrderByAggregateInput.schema"
import { VehicleEventMaxOrderByAggregateInputObjectSchema } from "./VehicleEventMaxOrderByAggregateInput.schema"
import { VehicleEventMinOrderByAggregateInputObjectSchema } from "./VehicleEventMinOrderByAggregateInput.schema"
import { VehicleEventSumOrderByAggregateInputObjectSchema } from "./VehicleEventSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    header: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    price: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    vehicleId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdById: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    vehicleOwnershipId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VehicleEventCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => VehicleEventAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehicleEventMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehicleEventMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => VehicleEventSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleEventOrderByWithAggregationInputObjectSchema = Schema
