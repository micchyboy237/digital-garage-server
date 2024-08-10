import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionSumOrderByAggregateInput> = z
  .object({
    freeTrialDuration: z.lazy(() => SortOrderSchema).optional(),
    price: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const SubscriptionSumOrderByAggregateInputObjectSchema = Schema
