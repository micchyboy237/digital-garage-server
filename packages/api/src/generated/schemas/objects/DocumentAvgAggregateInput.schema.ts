import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentAvgAggregateInputType> = z
  .object({
    invoiceValue: z.literal(true).optional(),
  })
  .strict()

export const DocumentAvgAggregateInputObjectSchema = Schema
