import { z } from "zod"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"

export const MediaFileDeleteOneSchema = z.object({ where: MediaFileWhereUniqueInputObjectSchema })
