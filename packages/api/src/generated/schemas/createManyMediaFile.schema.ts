import { z } from "zod"
import { MediaFileCreateManyInputObjectSchema } from "./objects/MediaFileCreateManyInput.schema"

export const MediaFileCreateManySchema = z.object({
  data: z.union([MediaFileCreateManyInputObjectSchema, z.array(MediaFileCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
