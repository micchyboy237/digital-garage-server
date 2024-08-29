import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fileUrl: z.lazy(() => SortOrderSchema).optional(),
    mimeType: z.lazy(() => SortOrderSchema).optional(),
    postId: z.lazy(() => SortOrderSchema).optional(),
    ownershipId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const VehicleDocumentCountOrderByAggregateInputObjectSchema = Schema
