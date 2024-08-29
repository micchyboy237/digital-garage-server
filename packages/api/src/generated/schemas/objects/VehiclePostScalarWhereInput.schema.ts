import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { EnumPostCategoryFilterObjectSchema } from "./EnumPostCategoryFilter.schema"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { EnumPostTypeNullableFilterObjectSchema } from "./EnumPostTypeNullableFilter.schema"
import { PostTypeSchema } from "../enums/PostType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema),
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehiclePostScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema),
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
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
    ownershipId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const VehiclePostScalarWhereInputObjectSchema = Schema
