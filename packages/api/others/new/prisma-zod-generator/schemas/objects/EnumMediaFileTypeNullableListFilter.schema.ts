import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumMediaFileTypeNullableListFilter> = z
  .object({
    equals: z
      .lazy(() => MediaFileTypeSchema)
      .array()
      .optional()
      .nullable(),
    has: z
      .lazy(() => MediaFileTypeSchema)
      .optional()
      .nullable(),
    hasEvery: z
      .lazy(() => MediaFileTypeSchema)
      .array()
      .optional(),
    hasSome: z
      .lazy(() => MediaFileTypeSchema)
      .array()
      .optional(),
    isEmpty: z.boolean().optional(),
  })
  .strict()

export const EnumMediaFileTypeNullableListFilterObjectSchema = Schema
