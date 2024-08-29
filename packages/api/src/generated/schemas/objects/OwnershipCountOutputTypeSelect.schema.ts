import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCountOutputTypeSelect> = z
  .object({
    posts: z.boolean().optional(),
    documents: z.boolean().optional(),
  })
  .strict()

export const OwnershipCountOutputTypeSelectObjectSchema = Schema
