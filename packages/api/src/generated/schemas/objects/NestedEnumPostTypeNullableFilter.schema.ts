import { z } from "zod"
import { PostTypeSchema } from "../enums/PostType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumPostTypeNullableFilter> = z
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
      .union([z.lazy(() => PostTypeSchema), z.lazy(() => NestedEnumPostTypeNullableFilterObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const NestedEnumPostTypeNullableFilterObjectSchema = Schema
