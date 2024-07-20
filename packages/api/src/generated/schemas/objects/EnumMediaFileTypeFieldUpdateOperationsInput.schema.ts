import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumMediaFileTypeFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => MediaFileTypeSchema).optional(),
  })
  .strict()

export const EnumMediaFileTypeFieldUpdateOperationsInputObjectSchema = Schema
