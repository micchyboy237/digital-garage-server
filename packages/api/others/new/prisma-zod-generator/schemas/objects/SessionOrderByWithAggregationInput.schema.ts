import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SessionCountOrderByAggregateInputObjectSchema } from "./SessionCountOrderByAggregateInput.schema"
import { SessionMaxOrderByAggregateInputObjectSchema } from "./SessionMaxOrderByAggregateInput.schema"
import { SessionMinOrderByAggregateInputObjectSchema } from "./SessionMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    token: z.lazy(() => SortOrderSchema).optional(),
    expiresAt: z.lazy(() => SortOrderSchema).optional(),
    accountId: z.lazy(() => SortOrderSchema).optional(),
    deviceFingerprint: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => SessionCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => SessionMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => SessionMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const SessionOrderByWithAggregationInputObjectSchema = Schema
