import { z } from "zod"
import { DocumentCountOutputTypeSelectObjectSchema } from "./DocumentCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => DocumentCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const DocumentCountOutputTypeArgsObjectSchema = Schema
