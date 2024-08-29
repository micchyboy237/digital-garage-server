import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { NestedEnumPostCategoryFilterObjectSchema } from "./NestedEnumPostCategoryFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumPostCategoryFilter> = z
  .object({
    equals: z.lazy(() => PostCategorySchema).optional(),
    in: z.union([z.lazy(() => PostCategorySchema).array(), z.lazy(() => PostCategorySchema)]).optional(),
    notIn: z.union([z.lazy(() => PostCategorySchema).array(), z.lazy(() => PostCategorySchema)]).optional(),
    not: z.union([z.lazy(() => PostCategorySchema), z.lazy(() => NestedEnumPostCategoryFilterObjectSchema)]).optional(),
  })
  .strict()

export const EnumPostCategoryFilterObjectSchema = Schema
