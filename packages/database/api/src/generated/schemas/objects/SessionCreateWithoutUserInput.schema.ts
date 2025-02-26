import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expiresAt: z.coerce.date(),
  })
  .strict()

export const SessionCreateWithoutUserInputObjectSchema = Schema
