import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    email: z.literal(true).optional(),
    firebaseUid: z.literal(true).optional(),
    isEmailVerified: z.literal(true).optional(),
    accountStatus: z.literal(true).optional(),
  })
  .strict()

export const UserMaxAggregateInputObjectSchema = Schema
