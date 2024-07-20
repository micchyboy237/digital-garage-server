import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    password: z.lazy(() => SortOrderSchema).optional(),
    googleId: z.lazy(() => SortOrderSchema).optional(),
    emailVerificationCode: z.lazy(() => SortOrderSchema).optional(),
    emailVerificationExpiry: z.lazy(() => SortOrderSchema).optional(),
    isEmailVerified: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    userId: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const AuthMinOrderByAggregateInputObjectSchema = Schema
