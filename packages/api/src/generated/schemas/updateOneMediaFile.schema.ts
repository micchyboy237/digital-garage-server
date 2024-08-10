import { z } from "zod"
import { MediaFileSelectObjectSchema } from "./objects/MediaFileSelect.schema"
import { MediaFileIncludeObjectSchema } from "./objects/MediaFileInclude.schema"
import { MediaFileUpdateInputObjectSchema } from "./objects/MediaFileUpdateInput.schema"
import { MediaFileUncheckedUpdateInputObjectSchema } from "./objects/MediaFileUncheckedUpdateInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"

export const MediaFileUpdateOneSchema = z.object({
  select: MediaFileSelectObjectSchema.optional(),
  include: MediaFileIncludeObjectSchema.optional(),
  data: z.union([MediaFileUpdateInputObjectSchema, MediaFileUncheckedUpdateInputObjectSchema]),
  where: MediaFileWhereUniqueInputObjectSchema,
})
