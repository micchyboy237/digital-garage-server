import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from "./UserCreateNestedOneWithoutAccountsInput.schema"
import { SessionCreateNestedManyWithoutAccountInputObjectSchema } from "./SessionCreateNestedManyWithoutAccountInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCreateInput> = z
  .object({
    id: z.string().optional(),
    provider: z.lazy(() => AuthProviderSchema),
    lastLogin: z.coerce.date().optional().nullable(),
    email: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutAccountInputObjectSchema).optional(),
  })
  .strict()

export const AccountCreateInputObjectSchema = Schema
