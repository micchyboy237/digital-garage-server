import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"
import { PostTypeSchema } from "../enums/PostType.schema"
import { PhotoUncheckedCreateNestedManyWithoutPostInputObjectSchema } from "./PhotoUncheckedCreateNestedManyWithoutPostInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUncheckedCreateWithoutDocumentsInput> = z
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
    ownershipId: z.string().optional().nullable(),
    photos: z.lazy(() => PhotoUncheckedCreateNestedManyWithoutPostInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostUncheckedCreateWithoutDocumentsInputObjectSchema = Schema
