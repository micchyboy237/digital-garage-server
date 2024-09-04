import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { EnumPostCategoryWithAggregatesFilterObjectSchema } from "./EnumPostCategoryWithAggregatesFilter.schema"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { EnumPostTypeNullableWithAggregatesFilterObjectSchema } from "./EnumPostTypeNullableWithAggregatesFilter.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehiclePostScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehiclePostScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehiclePostScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehiclePostScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehiclePostScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    title: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    category: z
      .union([z.lazy(() => EnumPostCategoryWithAggregatesFilterObjectSchema), z.lazy(() => PostCategorySchema)])
      .optional(),
    description: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    type: z
      .union([z.lazy(() => EnumPostTypeNullableWithAggregatesFilterObjectSchema), z.lazy(() => PostTypeSchema)])
      .optional()
      .nullable(),
    createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    ownershipId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const VehiclePostScalarWhereWithAggregatesInputObjectSchema = Schema
