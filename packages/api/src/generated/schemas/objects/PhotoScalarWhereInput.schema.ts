import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PhotoScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => PhotoScalarWhereInputObjectSchema), z.lazy(() => PhotoScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => PhotoScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => PhotoScalarWhereInputObjectSchema), z.lazy(() => PhotoScalarWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    url: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    thumbnailUrl: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    postId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    ownershipId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
  })
  .strict()

export const PhotoScalarWhereInputObjectSchema = Schema
