import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    url: z.lazy(() => SortOrderSchema).optional(),
    thumbnailUrl: z.lazy(() => SortOrderSchema).optional(),
    postId: z.lazy(() => SortOrderSchema).optional(),
    ownershipId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const PhotoMinOrderByAggregateInputObjectSchema = Schema
