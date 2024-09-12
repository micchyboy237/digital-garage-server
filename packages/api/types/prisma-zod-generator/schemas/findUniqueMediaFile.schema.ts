import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"

export const MediaFileFindUniqueSchema = z.object({ where: MediaFileWhereUniqueInputObjectSchema })
