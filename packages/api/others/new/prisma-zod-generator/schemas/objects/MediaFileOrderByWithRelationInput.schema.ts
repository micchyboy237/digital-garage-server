import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehiclePostOrderByWithRelationInputObjectSchema } from "./VehiclePostOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { VehicleOwnershipOrderByWithRelationInputObjectSchema } from "./VehicleOwnershipOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    mimeType: z.lazy(() => SortOrderSchema).optional(),
    fileName: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    thumbnailUrl: z.lazy(() => SortOrderSchema).optional(),
    postId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    ownershipId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    post: z.lazy(() => VehiclePostOrderByWithRelationInputObjectSchema).optional(),
    userDisplayPicture: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    vehicleDisplayPhotoOwnership: z.lazy(() => VehicleOwnershipOrderByWithRelationInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileOrderByWithRelationInputObjectSchema = Schema
