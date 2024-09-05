import { z } from "zod"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateexcludedMediaFileTypesInput> = z
  .object({
    set: z.lazy(() => MediaFileTypeSchema).array(),
  })
  .strict()

export const VehicleTransferCreateexcludedMediaFileTypesInputObjectSchema = Schema
