import { z } from "zod"
import { MediaFileSelectObjectSchema } from "./objects/MediaFileSelect.schema"
import { MediaFileIncludeObjectSchema } from "./objects/MediaFileInclude.schema"
import { MediaFileCreateInputObjectSchema } from "./objects/MediaFileCreateInput.schema"
import { MediaFileUncheckedCreateInputObjectSchema } from "./objects/MediaFileUncheckedCreateInput.schema"

export const MediaFileCreateOneSchema = z.object({
  select: MediaFileSelectObjectSchema.optional(),
  include: MediaFileIncludeObjectSchema.optional(),
  data: z.union([MediaFileCreateInputObjectSchema, MediaFileUncheckedCreateInputObjectSchema]),
})
