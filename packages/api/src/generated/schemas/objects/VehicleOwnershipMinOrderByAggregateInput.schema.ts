import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    startDate: z.lazy(() => SortOrderSchema).optional(),
    endDate: z.lazy(() => SortOrderSchema).optional(),
    isCurrentOwner: z.lazy(() => SortOrderSchema).optional(),
    isTemporaryOwner: z.lazy(() => SortOrderSchema).optional(),
    canEditDocuments: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const VehicleOwnershipMinOrderByAggregateInputObjectSchema = Schema
