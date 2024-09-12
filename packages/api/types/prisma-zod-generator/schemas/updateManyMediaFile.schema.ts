import { z } from "zod"
import { MediaFileUpdateManyMutationInputObjectSchema } from "./objects/MediaFileUpdateManyMutationInput.schema"
import { MediaFileWhereInputObjectSchema } from "./objects/MediaFileWhereInput.schema"

export const MediaFileUpdateManySchema = z.object({
  data: MediaFileUpdateManyMutationInputObjectSchema,
  where: MediaFileWhereInputObjectSchema.optional(),
})
