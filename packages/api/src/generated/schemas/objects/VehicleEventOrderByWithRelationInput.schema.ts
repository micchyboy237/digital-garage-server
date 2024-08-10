import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { DocumentOrderByRelationAggregateInputObjectSchema } from "./DocumentOrderByRelationAggregateInput.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./VehicleOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { VehicleOwnershipOrderByWithRelationInputObjectSchema } from "./VehicleOwnershipOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventOrderByWithRelationInput> = z
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
    documents: z.lazy(() => DocumentOrderByRelationAggregateInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleOrderByWithRelationInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    vehicleOwnership: z.lazy(() => VehicleOwnershipOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const VehicleEventOrderByWithRelationInputObjectSchema = Schema
