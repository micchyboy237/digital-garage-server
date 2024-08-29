import { z } from "zod"
import { PostTypeSchema } from "../enums/PostType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NullableEnumPostTypeFieldUpdateOperationsInput> = z
  .object({
    set: z
      .lazy(() => PostTypeSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const NullableEnumPostTypeFieldUpdateOperationsInputObjectSchema = Schema
