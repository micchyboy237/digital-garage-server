import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from "./UserCreateNestedOneWithoutAccountsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    provider: z.lazy(() => AuthProviderSchema),
    lastLogin: z.coerce.date().optional().nullable(),
    email: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema),
  })
  .strict()

export const AccountCreateWithoutSessionsInputObjectSchema = Schema
