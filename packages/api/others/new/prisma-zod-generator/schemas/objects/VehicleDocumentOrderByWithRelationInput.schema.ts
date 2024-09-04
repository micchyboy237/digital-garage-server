import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { MediaFileOrderByWithRelationInputObjectSchema } from "./MediaFileOrderByWithRelationInput.schema"
import { VehiclePostOrderByWithRelationInputObjectSchema } from "./VehiclePostOrderByWithRelationInput.schema"
import { VehicleOwnershipOrderByWithRelationInputObjectSchema } from "./VehicleOwnershipOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fileId: z.lazy(() => SortOrderSchema).optional(),
    postId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    ownershipId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    file: z.lazy(() => MediaFileOrderByWithRelationInputObjectSchema).optional(),
    post: z.lazy(() => VehiclePostOrderByWithRelationInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentOrderByWithRelationInputObjectSchema = Schema
