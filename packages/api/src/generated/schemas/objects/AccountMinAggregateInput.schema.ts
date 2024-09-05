import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    provider: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    firebaseUid: z.literal(true).optional(),
    isEmailVerified: z.literal(true).optional(),
    lastLogin: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const AccountMinAggregateInputObjectSchema = Schema
