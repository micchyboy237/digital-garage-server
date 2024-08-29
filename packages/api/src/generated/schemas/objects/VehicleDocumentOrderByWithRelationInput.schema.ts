import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehiclePostOrderByWithRelationInputObjectSchema } from "./VehiclePostOrderByWithRelationInput.schema"
import { OwnershipOrderByWithRelationInputObjectSchema } from "./OwnershipOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fileUrl: z.lazy(() => SortOrderSchema).optional(),
    mimeType: z.lazy(() => SortOrderSchema).optional(),
    postId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    ownershipId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    post: z.lazy(() => VehiclePostOrderByWithRelationInputObjectSchema).optional(),
    ownership: z.lazy(() => OwnershipOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentOrderByWithRelationInputObjectSchema = Schema
