import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    password: z.string().optional().nullable(),
    googleId: z.string().optional().nullable(),
    emailVerificationCode: z.string().optional().nullable(),
    emailVerificationExpiry: z.coerce.date().optional().nullable(),
    isEmailVerified: z.boolean().optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    passwordResetToken: z.string().optional().nullable(),
    passwordResetExpiry: z.coerce.date().optional().nullable(),
  })
  .strict()

export const AuthUncheckedCreateWithoutUserInputObjectSchema = Schema
