import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { DocumentOrderByWithRelationInputObjectSchema } from "./DocumentOrderByWithRelationInput.schema"
import { VehicleOwnershipOrderByWithRelationInputObjectSchema } from "./VehicleOwnershipOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    mimeType: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    documentId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    vehicleOwnershipId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    document: z.lazy(() => DocumentOrderByWithRelationInputObjectSchema).optional(),
    vehicleOwnership: z.lazy(() => VehicleOwnershipOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileOrderByWithRelationInputObjectSchema = Schema
