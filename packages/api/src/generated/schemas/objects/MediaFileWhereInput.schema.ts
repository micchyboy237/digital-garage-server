import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumMediaFileTypeFilterObjectSchema } from "./EnumMediaFileTypeFilter.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DocumentRelationFilterObjectSchema } from "./DocumentRelationFilter.schema"
import { DocumentWhereInputObjectSchema } from "./DocumentWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => MediaFileWhereInputObjectSchema), z.lazy(() => MediaFileWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => MediaFileWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => MediaFileWhereInputObjectSchema), z.lazy(() => MediaFileWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumMediaFileTypeFilterObjectSchema), z.lazy(() => MediaFileTypeSchema)]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    documentId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    document: z
      .union([z.lazy(() => DocumentRelationFilterObjectSchema), z.lazy(() => DocumentWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const MediaFileWhereInputObjectSchema = Schema
