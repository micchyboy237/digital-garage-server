import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { UserCreateNestedOneWithoutPostsInputObjectSchema } from "./UserCreateNestedOneWithoutPostsInput.schema"
import { VehicleOwnershipCreateNestedOneWithoutPostsInputObjectSchema } from "./VehicleOwnershipCreateNestedOneWithoutPostsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCreateWithoutFilesInput> = z
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
    createdBy: z.lazy(() => UserCreateNestedOneWithoutPostsInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipCreateNestedOneWithoutPostsInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostCreateWithoutFilesInputObjectSchema = Schema
