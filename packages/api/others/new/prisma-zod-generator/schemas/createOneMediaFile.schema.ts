import { z } from "zod"
import { MediaFileCreateInputObjectSchema } from "./objects/MediaFileCreateInput.schema"
import { MediaFileUncheckedCreateInputObjectSchema } from "./objects/MediaFileUncheckedCreateInput.schema"

export const MediaFileCreateOneSchema = z.object({
  data: z.union([MediaFileCreateInputObjectSchema, MediaFileUncheckedCreateInputObjectSchema]),
})
