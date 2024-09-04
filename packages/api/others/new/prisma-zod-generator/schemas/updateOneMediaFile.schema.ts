import { z } from "zod"
import { MediaFileUpdateInputObjectSchema } from "./objects/MediaFileUpdateInput.schema"
import { MediaFileUncheckedUpdateInputObjectSchema } from "./objects/MediaFileUncheckedUpdateInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"

export const MediaFileUpdateOneSchema = z.object({
  data: z.union([MediaFileUpdateInputObjectSchema, MediaFileUncheckedUpdateInputObjectSchema]),
  where: MediaFileWhereUniqueInputObjectSchema,
})
