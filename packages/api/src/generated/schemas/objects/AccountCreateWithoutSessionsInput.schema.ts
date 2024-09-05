import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { UserCreateNestedOneWithoutAccountsInputObjectSchema } from "./UserCreateNestedOneWithoutAccountsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCreateWithoutSessionsInput> = z
  .object({
    id: z.string().optional(),
    provider: z.lazy(() => AuthProviderSchema),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    lastLogin: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAccountsInputObjectSchema),
  })
  .strict()

export const AccountCreateWithoutSessionsInputObjectSchema = Schema
