import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCountOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    displayDate: z.lazy(() => SortOrderSchema).optional(),
    header: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    invoiceValue: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DocumentCountOrderByAggregateInputObjectSchema = Schema
