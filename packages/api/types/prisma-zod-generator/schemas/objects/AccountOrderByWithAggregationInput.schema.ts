import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { AccountCountOrderByAggregateInputObjectSchema } from "./AccountCountOrderByAggregateInput.schema"
import { AccountMaxOrderByAggregateInputObjectSchema } from "./AccountMaxOrderByAggregateInput.schema"
import { AccountMinOrderByAggregateInputObjectSchema } from "./AccountMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    provider: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    firebaseUid: z.lazy(() => SortOrderSchema).optional(),
    isEmailVerified: z.lazy(() => SortOrderSchema).optional(),
    lastLogin: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => AccountCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AccountMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AccountMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AccountOrderByWithAggregationInputObjectSchema = Schema
