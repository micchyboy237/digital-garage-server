import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehicleOwnershipCountOrderByAggregateInputObjectSchema } from "./VehicleOwnershipCountOrderByAggregateInput.schema"
import { VehicleOwnershipMaxOrderByAggregateInputObjectSchema } from "./VehicleOwnershipMaxOrderByAggregateInput.schema"
import { VehicleOwnershipMinOrderByAggregateInputObjectSchema } from "./VehicleOwnershipMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    isCurrentOwner: z.lazy(() => SortOrderSchema).optional(),
    isTemporaryOwner: z.lazy(() => SortOrderSchema).optional(),
    canEditDocuments: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VehicleOwnershipCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehicleOwnershipMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehicleOwnershipMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipOrderByWithAggregationInputObjectSchema = Schema
