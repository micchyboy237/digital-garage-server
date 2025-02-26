import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionMinAggregateInputType> = z
  .object({
    id: z.literal(true).optional(),
    token: z.literal(true).optional(),
    expiresAt: z.literal(true).optional(),
    userId: z.literal(true).optional(),
  })
  .strict()

export const SessionMinAggregateInputObjectSchema = Schema
