import { z } from "zod"
import { MediaFileSelectObjectSchema } from "./objects/MediaFileSelect.schema"
import { MediaFileIncludeObjectSchema } from "./objects/MediaFileInclude.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"

export const MediaFileDeleteOneSchema = z.object({
  select: MediaFileSelectObjectSchema.optional(),
  include: MediaFileIncludeObjectSchema.optional(),
  where: MediaFileWhereUniqueInputObjectSchema,
})
