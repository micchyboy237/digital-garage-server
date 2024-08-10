import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumMediaFileTypeFilterObjectSchema } from "./EnumMediaFileTypeFilter.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => MediaFileScalarWhereInputObjectSchema), z.lazy(() => MediaFileScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => MediaFileScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => MediaFileScalarWhereInputObjectSchema), z.lazy(() => MediaFileScalarWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumMediaFileTypeFilterObjectSchema), z.lazy(() => MediaFileTypeSchema)]).optional(),
    mimeType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    documentId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    vehicleOwnershipId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const MediaFileScalarWhereInputObjectSchema = Schema
