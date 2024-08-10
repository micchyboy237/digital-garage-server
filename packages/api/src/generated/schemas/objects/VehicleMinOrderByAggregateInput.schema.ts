import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const VehicleMinOrderByAggregateInputObjectSchema = Schema
