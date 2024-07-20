import { z } from "zod"
import { MediaFileSelectObjectSchema } from "./objects/MediaFileSelect.schema"
import { MediaFileIncludeObjectSchema } from "./objects/MediaFileInclude.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"
import { MediaFileCreateInputObjectSchema } from "./objects/MediaFileCreateInput.schema"
import { MediaFileUncheckedCreateInputObjectSchema } from "./objects/MediaFileUncheckedCreateInput.schema"
import { MediaFileUpdateInputObjectSchema } from "./objects/MediaFileUpdateInput.schema"
import { MediaFileUncheckedUpdateInputObjectSchema } from "./objects/MediaFileUncheckedUpdateInput.schema"

export const MediaFileUpsertSchema = z.object({
  select: MediaFileSelectObjectSchema.optional(),
  include: MediaFileIncludeObjectSchema.optional(),
  where: MediaFileWhereUniqueInputObjectSchema,
  create: z.union([MediaFileCreateInputObjectSchema, MediaFileUncheckedCreateInputObjectSchema]),
  update: z.union([MediaFileUpdateInputObjectSchema, MediaFileUncheckedUpdateInputObjectSchema]),
})
