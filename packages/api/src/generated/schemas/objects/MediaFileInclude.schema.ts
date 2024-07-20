import { z } from "zod"
import { DocumentArgsObjectSchema } from "./DocumentArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileInclude> = z
  .object({
    document: z.union([z.boolean(), z.lazy(() => DocumentArgsObjectSchema)]).optional(),
  })
  .strict()

export const MediaFileIncludeObjectSchema = Schema
