import { z } from "zod"
import { UserCreateNestedOneWithoutAuthInputObjectSchema } from "./UserCreateNestedOneWithoutAuthInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthCreateInput> = z
  .object({
    id: z.string().optional(),
    password: z.string().optional().nullable(),
    googleId: z.string().optional().nullable(),
    emailVerificationCode: z.string().optional().nullable(),
    emailVerificationExpiry: z.coerce.date().optional().nullable(),
    isEmailVerified: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutAuthInputObjectSchema),
  })
  .strict()

export const AuthCreateInputObjectSchema = Schema
