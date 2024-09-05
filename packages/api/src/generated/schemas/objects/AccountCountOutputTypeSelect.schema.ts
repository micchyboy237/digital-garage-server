import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCountOutputTypeSelect> = z
  .object({
    sessions: z.boolean().optional(),
  })
  .strict()

export const AccountCountOutputTypeSelectObjectSchema = Schema
