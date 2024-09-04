import { z } from "zod"
import { MediaFileOrderByWithRelationInputObjectSchema } from "./objects/MediaFileOrderByWithRelationInput.schema"
import { MediaFileWhereInputObjectSchema } from "./objects/MediaFileWhereInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"
import { MediaFileScalarFieldEnumSchema } from "./enums/MediaFileScalarFieldEnum.schema"

export const MediaFileFindFirstSchema = z.object({
  orderBy: z
    .union([MediaFileOrderByWithRelationInputObjectSchema, MediaFileOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: MediaFileWhereInputObjectSchema.optional(),
  cursor: MediaFileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(MediaFileScalarFieldEnumSchema).optional(),
})
