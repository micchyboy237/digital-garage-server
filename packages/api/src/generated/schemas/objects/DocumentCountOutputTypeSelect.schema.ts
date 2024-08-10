import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCountOutputTypeSelect> = z
  .object({
    files: z.boolean().optional(),
  })
  .strict()

export const DocumentCountOutputTypeSelectObjectSchema = Schema
