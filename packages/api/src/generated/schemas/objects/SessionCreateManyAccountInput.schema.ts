import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateManyAccountInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expiresAt: z.coerce.date(),
    deviceFingerprint: z.string(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const SessionCreateManyAccountInputObjectSchema = Schema
