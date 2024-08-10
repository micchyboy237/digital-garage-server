import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./VehicleOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { MediaFileOrderByRelationAggregateInputObjectSchema } from "./MediaFileOrderByRelationAggregateInput.schema"
import { VehicleEventOrderByWithRelationInputObjectSchema } from "./VehicleEventOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentOrderByWithRelationInput> = z
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
    vehicle: z.lazy(() => VehicleOrderByWithRelationInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    files: z.lazy(() => MediaFileOrderByRelationAggregateInputObjectSchema).optional(),
    vehicleEvent: z.lazy(() => VehicleEventOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const DocumentOrderByWithRelationInputObjectSchema = Schema
