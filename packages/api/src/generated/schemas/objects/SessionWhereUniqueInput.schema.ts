import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    token: z.string().optional(),
    userId: z.string().optional(),
  })
  .strict()

export const SessionWhereUniqueInputObjectSchema = Schema
