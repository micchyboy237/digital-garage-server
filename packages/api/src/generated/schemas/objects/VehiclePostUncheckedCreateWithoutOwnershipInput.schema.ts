import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { PhotoUncheckedCreateNestedManyWithoutPostInputObjectSchema } from "./PhotoUncheckedCreateNestedManyWithoutPostInput.schema"
import { VehicleDocumentUncheckedCreateNestedManyWithoutPostInputObjectSchema } from "./VehicleDocumentUncheckedCreateNestedManyWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUncheckedCreateWithoutOwnershipInput> = z
  .object({
    id: z.string().optional(),
    date: z.coerce.date(),
    title: z.string(),
    category: z.lazy(() => PostCategorySchema).optional(),
    description: z.string().optional().nullable(),
    type: z
      .lazy(() => PostTypeSchema)
      .optional()
      .nullable(),
    createdById: z.string(),
    photos: z.lazy(() => PhotoUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostUncheckedCreateWithoutOwnershipInputObjectSchema = Schema
