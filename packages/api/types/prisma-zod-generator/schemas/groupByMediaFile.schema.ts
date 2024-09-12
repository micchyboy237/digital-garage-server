import { z } from "zod"
import { MediaFileWhereInputObjectSchema } from "./objects/MediaFileWhereInput.schema"
import { MediaFileOrderByWithAggregationInputObjectSchema } from "./objects/MediaFileOrderByWithAggregationInput.schema"
import { MediaFileScalarWhereWithAggregatesInputObjectSchema } from "./objects/MediaFileScalarWhereWithAggregatesInput.schema"
import { MediaFileScalarFieldEnumSchema } from "./enums/MediaFileScalarFieldEnum.schema"

export const MediaFileGroupBySchema = z.object({
  where: MediaFileWhereInputObjectSchema.optional(),
  orderBy: z
    .union([MediaFileOrderByWithAggregationInputObjectSchema, MediaFileOrderByWithAggregationInputObjectSchema.array()])
    .optional(),
  having: MediaFileScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(MediaFileScalarFieldEnumSchema),
})
