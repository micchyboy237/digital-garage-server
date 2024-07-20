import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { AuthCountOrderByAggregateInputObjectSchema } from "./AuthCountOrderByAggregateInput.schema"
import { AuthMaxOrderByAggregateInputObjectSchema } from "./AuthMaxOrderByAggregateInput.schema"
import { AuthMinOrderByAggregateInputObjectSchema } from "./AuthMinOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    googleId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    emailVerificationCode: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    emailVerificationExpiry: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    isEmailVerified: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => AuthCountOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => AuthMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => AuthMinOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const AuthOrderByWithAggregationInputObjectSchema = Schema
