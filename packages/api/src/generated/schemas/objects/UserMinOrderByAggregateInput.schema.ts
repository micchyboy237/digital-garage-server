import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    firebaseUid: z.lazy(() => SortOrderSchema).optional(),
    isEmailVerified: z.lazy(() => SortOrderSchema).optional(),
    accountStatus: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const UserMinOrderByAggregateInputObjectSchema = Schema
