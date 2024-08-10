import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUncheckedCreateWithoutDocumentInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MediaFileTypeSchema),
    mimeType: z.string(),
    url: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vehicleOwnershipId: z.string().optional().nullable(),
  })
  .strict()

export const MediaFileUncheckedCreateWithoutDocumentInputObjectSchema = Schema
