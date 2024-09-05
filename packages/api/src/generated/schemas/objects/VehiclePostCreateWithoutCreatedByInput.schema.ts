import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { MediaFileCreateNestedManyWithoutPostInputObjectSchema } from "./MediaFileCreateNestedManyWithoutPostInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateWithoutCreatedByInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    category: z.lazy(() => PostCategorySchema).optional(),
    description: z.string().optional().nullable(),
    type: z
      .lazy(() => PostTypeSchema)
      .optional()
      .nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    files: z.lazy(() => MediaFileCreateNestedManyWithoutPostInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutPostsInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostCreateWithoutCreatedByInputObjectSchema = Schema
