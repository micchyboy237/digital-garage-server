import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumPostCategoryFilterObjectSchema } from "./EnumPostCategoryFilter.schema"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { EnumPostTypeNullableFilterObjectSchema } from "./EnumPostTypeNullableFilter.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { MediaFileListRelationFilterObjectSchema } from "./MediaFileListRelationFilter.schema"
import { VehicleDocumentListRelationFilterObjectSchema } from "./VehicleDocumentListRelationFilter.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { VehicleOwnershipRelationFilterObjectSchema } from "./VehicleOwnershipRelationFilter.schema"
import { VehicleOwnershipWhereInputObjectSchema } from "./VehicleOwnershipWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => VehiclePostWhereInputObjectSchema), z.lazy(() => VehiclePostWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => VehiclePostWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => VehiclePostWhereInputObjectSchema), z.lazy(() => VehiclePostWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    category: z.union([z.lazy(() => EnumPostCategoryFilterObjectSchema), z.lazy(() => PostCategorySchema)]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    type: z
      .union([z.lazy(() => EnumPostTypeNullableFilterObjectSchema), z.lazy(() => PostTypeSchema)])
      .optional()
      .nullable(),
    createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    ownershipId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    photos: z.lazy(() => MediaFileListRelationFilterObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentListRelationFilterObjectSchema).optional(),
    createdBy: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
    ownership: z
      .union([z.lazy(() => VehicleOwnershipRelationFilterObjectSchema), z.lazy(() => VehicleOwnershipWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehiclePostWhereInputObjectSchema = Schema
