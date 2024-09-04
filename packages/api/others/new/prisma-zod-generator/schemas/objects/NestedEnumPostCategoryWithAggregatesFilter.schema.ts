import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumPostCategoryFilterObjectSchema } from "./NestedEnumPostCategoryFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumPostCategoryWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => PostCategorySchema).optional(),
    in: z.union([z.lazy(() => PostCategorySchema).array(), z.lazy(() => PostCategorySchema)]).optional(),
    notIn: z.union([z.lazy(() => PostCategorySchema).array(), z.lazy(() => PostCategorySchema)]).optional(),
    not: z
      .union([z.lazy(() => PostCategorySchema), z.lazy(() => NestedEnumPostCategoryWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPostCategoryFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPostCategoryFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumPostCategoryWithAggregatesFilterObjectSchema = Schema
