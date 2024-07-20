import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    password: z.literal(true).optional(),
    googleId: z.literal(true).optional(),
    emailVerificationCode: z.literal(true).optional(),
    emailVerificationExpiry: z.literal(true).optional(),
    isEmailVerified: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict()

export const AuthMaxAggregateInputObjectSchema = Schema
