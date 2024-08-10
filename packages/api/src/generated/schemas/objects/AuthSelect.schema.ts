import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthSelect> = z
  .object({
    id: z.boolean().optional(),
    password: z.boolean().optional(),
    googleId: z.boolean().optional(),
    emailVerificationCode: z.boolean().optional(),
    emailVerificationExpiry: z.boolean().optional(),
    isEmailVerified: z.boolean().optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    passwordResetToken: z.boolean().optional(),
    passwordResetExpiry: z.boolean().optional(),
  })
  .strict()

export const AuthSelectObjectSchema = Schema
