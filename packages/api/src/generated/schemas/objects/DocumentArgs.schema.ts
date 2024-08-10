import { z } from "zod"
import { DocumentSelectObjectSchema } from "./DocumentSelect.schema"
import { DocumentIncludeObjectSchema } from "./DocumentInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentArgs> = z
  .object({
    select: z.lazy(() => DocumentSelectObjectSchema).optional(),
    include: z.lazy(() => DocumentIncludeObjectSchema).optional(),
  })
  .strict()

export const DocumentArgsObjectSchema = Schema
