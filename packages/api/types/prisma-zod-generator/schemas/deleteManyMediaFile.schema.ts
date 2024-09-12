import { z } from "zod"
import { MediaFileWhereInputObjectSchema } from "./objects/MediaFileWhereInput.schema"

export const MediaFileDeleteManySchema = z.object({ where: MediaFileWhereInputObjectSchema.optional() })
