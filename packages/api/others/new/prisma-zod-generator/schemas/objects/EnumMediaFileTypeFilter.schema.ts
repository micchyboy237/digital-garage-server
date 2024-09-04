import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { NestedEnumMediaFileTypeFilterObjectSchema } from "./NestedEnumMediaFileTypeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumMediaFileTypeFilter> = z
  .object({
    equals: z.lazy(() => MediaFileTypeSchema).optional(),
    in: z.union([z.lazy(() => MediaFileTypeSchema).array(), z.lazy(() => MediaFileTypeSchema)]).optional(),
    notIn: z.union([z.lazy(() => MediaFileTypeSchema).array(), z.lazy(() => MediaFileTypeSchema)]).optional(),
    not: z.union([z.lazy(() => MediaFileTypeSchema), z.lazy(() => NestedEnumMediaFileTypeFilterObjectSchema)]).optional(),
  })
  .strict()

export const EnumMediaFileTypeFilterObjectSchema = Schema
