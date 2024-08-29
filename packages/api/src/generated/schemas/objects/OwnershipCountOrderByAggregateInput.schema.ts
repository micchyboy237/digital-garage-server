import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    isCurrentOwner: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    excludedPosts: z.lazy(() => SortOrderSchema).optional(),
    excludedPhotos: z.lazy(() => SortOrderSchema).optional(),
    excludedDocs: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const OwnershipCountOrderByAggregateInputObjectSchema = Schema
