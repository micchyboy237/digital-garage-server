import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { MediaFileUncheckedCreateNestedManyWithoutPostInputObjectSchema } from "./MediaFileUncheckedCreateNestedManyWithoutPostInput.schema"
import { VehicleDocumentUncheckedCreateNestedManyWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedCreateNestedManyWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUncheckedCreateWithoutOwnershipInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    category: z.lazy(() => PostCategorySchema).optional(),
    description: z.string().optional().nullable(),
    type: z
      .lazy(() => PostTypeSchema)
      .optional()
      .nullable(),
    createdById: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    photos: z.lazy(() => MediaFileUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema = Schema
