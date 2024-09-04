import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"
import { MediaFileCreateInputObjectSchema } from "./objects/MediaFileCreateInput.schema"
import { MediaFileUncheckedCreateInputObjectSchema } from "./objects/MediaFileUncheckedCreateInput.schema"
import { MediaFileUpdateInputObjectSchema } from "./objects/MediaFileUpdateInput.schema"
import { MediaFileUncheckedUpdateInputObjectSchema } from "./objects/MediaFileUncheckedUpdateInput.schema"

export const MediaFileUpsertSchema = z.object({
  where: MediaFileWhereUniqueInputObjectSchema,
  create: z.union([MediaFileCreateInputObjectSchema, MediaFileUncheckedCreateInputObjectSchema]),
  update: z.union([MediaFileUpdateInputObjectSchema, MediaFileUncheckedUpdateInputObjectSchema]),
})
