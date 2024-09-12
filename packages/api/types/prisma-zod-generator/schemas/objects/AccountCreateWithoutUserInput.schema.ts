import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { SessionCreateNestedManyWithoutAccountInputObjectSchema } from "./SessionCreateNestedManyWithoutAccountInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    provider: z.lazy(() => AuthProviderSchema),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    lastLogin: z.coerce.date().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutAccountInputObjectSchema).optional(),
  })
  .strict()

export const AccountCreateWithoutUserInputObjectSchema = Schema
