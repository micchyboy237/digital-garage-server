import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionMaxAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    token: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    accountId: z.literal(true).optional(),
    deviceFingerprint: z.literal(true).optional(),
    userId: z.literal(true).optional(),
    createdAt: z.literal(true).optional(),
    updatedAt: z.literal(true).optional(),
  })
  .strict()

export const SessionMaxAggregateInputObjectSchema = Schema
