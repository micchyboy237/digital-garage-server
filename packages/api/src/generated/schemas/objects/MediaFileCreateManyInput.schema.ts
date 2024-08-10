import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileCreateManyInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => MediaFileTypeSchema),
    mimeType: z.string(),
    url: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    documentId: z.string().optional().nullable(),
    userId: z.string().optional().nullable(),
    vehicleOwnershipId: z.string().optional().nullable(),
  })
  .strict()

export const MediaFileCreateManyInputObjectSchema = Schema
