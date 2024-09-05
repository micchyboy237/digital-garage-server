import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehicleTransferCountOrderByAggregateInputObjectSchema } from "./VehicleTransferCountOrderByAggregateInput.schema"
import { VehicleTransferMaxOrderByAggregateInputObjectSchema } from "./VehicleTransferMaxOrderByAggregateInput.schema"
import { VehicleTransferMinOrderByAggregateInputObjectSchema } from "./VehicleTransferMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    senderId: z.lazy(() => SortOrderSchema).optional(),
    recipientId: z.lazy(() => SortOrderSchema).optional(),
    status: z.lazy(() => SortOrderSchema).optional(),
    transferDate: z.lazy(() => SortOrderSchema).optional(),
    responseDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    reason: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    excludedMediaFileTypes: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VehicleTransferCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehicleTransferMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehicleTransferMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleTransferOrderByWithAggregationInputObjectSchema = Schema
