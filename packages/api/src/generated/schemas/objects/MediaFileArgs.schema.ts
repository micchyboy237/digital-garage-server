import { z } from "zod"
import { MediaFileSelectObjectSchema } from "./MediaFileSelect.schema"
import { MediaFileIncludeObjectSchema } from "./MediaFileInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileArgs> = z
  .object({
    select: z.lazy(() => MediaFileSelectObjectSchema).optional(),
    include: z.lazy(() => MediaFileIncludeObjectSchema).optional(),
  })
  .strict()

export const MediaFileArgsObjectSchema = Schema
