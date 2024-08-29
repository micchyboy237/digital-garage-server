import { z } from "zod"
import { PostTypeSchema } from "../enums/PostType.schema"
import { NestedEnumPostTypeNullableWithAggregatesFilterObjectSchema } from "./NestedEnumPostTypeNullableWithAggregatesFilter.schema"
import { NestedIntNullableFilterObjectSchema } from "./NestedIntNullableFilter.schema"
import { NestedEnumPostTypeNullableFilterObjectSchema } from "./NestedEnumPostTypeNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumPostTypeNullableWithAggregatesFilter> = z
  .object({
    equals: z
      .lazy(() => PostTypeSchema)
      .optional()
      .nullable(),
    in: z
      .union([z.lazy(() => PostTypeSchema).array(), z.lazy(() => PostTypeSchema)])
      .optional()
      .nullable(),
    notIn: z
      .union([z.lazy(() => PostTypeSchema).array(), z.lazy(() => PostTypeSchema)])
      .optional()
      .nullable(),
    not: z
      .union([z.lazy(() => PostTypeSchema), z.lazy(() => NestedEnumPostTypeNullableWithAggregatesFilterObjectSchema)])
      .optional()
      .nullable(),
    _count: z.lazy(() => NestedIntNullableFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumPostTypeNullableFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumPostTypeNullableFilterObjectSchema).optional(),
  })
  .strict()

export const EnumPostTypeNullableWithAggregatesFilterObjectSchema = Schema
