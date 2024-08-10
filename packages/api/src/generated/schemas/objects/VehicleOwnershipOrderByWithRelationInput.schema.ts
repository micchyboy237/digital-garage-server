import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { MediaFileOrderByWithRelationInputObjectSchema } from "./MediaFileOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./VehicleOrderByWithRelationInput.schema"
import { VehicleEventOrderByRelationAggregateInputObjectSchema } from "./VehicleEventOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    startDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    isCurrentOwner: z.lazy(() => SortOrderSchema).optional(),
    isTemporaryOwner: z.lazy(() => SortOrderSchema).optional(),
    canEditDocuments: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    displayPicture: z.lazy(() => MediaFileOrderByWithRelationInputObjectSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleOrderByWithRelationInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipOrderByWithRelationInputObjectSchema = Schema
