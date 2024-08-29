import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { PhotoOrderByWithRelationInputObjectSchema } from "./PhotoOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./VehicleOrderByWithRelationInput.schema"
import { VehiclePostOrderByRelationAggregateInputObjectSchema } from "./VehiclePostOrderByRelationAggregateInput.schema"
import { VehicleDocumentOrderByRelationAggregateInputObjectSchema } from "./VehicleDocumentOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    isCurrentOwner: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    excludedPosts: z.lazy(() => SortOrderSchema).optional(),
    excludedPhotos: z.lazy(() => SortOrderSchema).optional(),
    excludedDocs: z.lazy(() => SortOrderSchema).optional(),
    vehicleDisplayPhoto: z.lazy(() => PhotoOrderByWithRelationInputObjectSchema).optional(),
    user: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleOrderByWithRelationInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostOrderByRelationAggregateInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipOrderByWithRelationInputObjectSchema = Schema
