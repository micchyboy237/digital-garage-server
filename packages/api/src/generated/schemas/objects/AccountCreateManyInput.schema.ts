import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCreateManyInput> = z
  .object({
    id: z.string().optional(),
    provider: z.lazy(() => AuthProviderSchema),
    lastLogin: z.coerce.date().optional().nullable(),
    userId: z.string(),
    email: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const AccountCreateManyInputObjectSchema = Schema
