import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { MediaFileOrderByWithRelationInputObjectSchema } from "./MediaFileOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./VehicleOrderByWithRelationInput.schema"
import { VehiclePostOrderByRelationAggregateInputObjectSchema } from "./VehiclePostOrderByRelationAggregateInput.schema"
import { MediaFileOrderByRelationAggregateInputObjectSchema } from "./MediaFileOrderByRelationAggregateInput.schema"
import { VehicleDetailsOrderByWithRelationInputObjectSchema } from "./VehicleDetailsOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    overview: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    isCurrentOwner: z.lazy(() => SortOrderSchema).optional(),
    vehicleDisplayPhotoId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    vehicleDisplayPhoto: z.lazy(() => MediaFileOrderByWithRelationInputObjectSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleOrderByWithRelationInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostOrderByRelationAggregateInputObjectSchema).optional(),
    vehicleFiles: z.lazy(() => MediaFileOrderByRelationAggregateInputObjectSchema).optional(),
    vehicleDetails: z.lazy(() => VehicleDetailsOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipOrderByWithRelationInputObjectSchema = Schema
