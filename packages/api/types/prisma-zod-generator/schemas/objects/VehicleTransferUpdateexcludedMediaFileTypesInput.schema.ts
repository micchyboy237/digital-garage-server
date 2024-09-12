import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateexcludedMediaFileTypesInput> = z
  .object({
    set: z
      .lazy(() => MediaFileTypeSchema)
      .array()
      .optional(),
    push: z.union([z.lazy(() => MediaFileTypeSchema), z.lazy(() => MediaFileTypeSchema).array()]).optional(),
  })
  .strict()

export const VehicleTransferUpdateexcludedMediaFileTypesInputObjectSchema = Schema
