import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentSumOrderByAggregateInput> = z
  .object({
    invoiceValue: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const DocumentSumOrderByAggregateInputObjectSchema = Schema
