import { z } from "zod"
import { MediaFileWhereInputObjectSchema } from "./MediaFileWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileListRelationFilter> = z
  .object({
    every: z.lazy(() => MediaFileWhereInputObjectSchema).optional(),
    some: z.lazy(() => MediaFileWhereInputObjectSchema).optional(),
    none: z.lazy(() => MediaFileWhereInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileListRelationFilterObjectSchema = Schema
