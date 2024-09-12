import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { EnumMediaFileTypeWithAggregatesFilterObjectSchema } from "./EnumMediaFileTypeWithAggregatesFilter.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => MediaFileScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => MediaFileScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => MediaFileScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => MediaFileScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => MediaFileScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    type: z
      .union([z.lazy(() => EnumMediaFileTypeWithAggregatesFilterObjectSchema), z.lazy(() => MediaFileTypeSchema)])
      .optional(),
    mimeType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    fileName: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    thumbnailUrl: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    postId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ownershipId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const MediaFileScalarWhereWithAggregatesInputObjectSchema = Schema
