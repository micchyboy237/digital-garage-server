import { z } from "zod"
import { PostCategorySchema } from "../enums/PostCategory.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumPostCategoryFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PostCategorySchema).optional(),
  })
  .strict()

export const EnumPostCategoryFieldUpdateOperationsInputObjectSchema = Schema
