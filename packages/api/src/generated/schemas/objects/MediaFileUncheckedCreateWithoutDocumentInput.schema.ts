import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedCreateWithoutDocumentInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MediaFileTypeSchema),
    url: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const MediaFileUncheckedCreateWithoutDocumentInputObjectSchema = Schema
