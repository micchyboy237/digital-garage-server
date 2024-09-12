import { z } from "zod"
import { MediaFileOrderByWithRelationInputObjectSchema } from "./objects/MediaFileOrderByWithRelationInput.schema"
import { MediaFileWhereInputObjectSchema } from "./objects/MediaFileWhereInput.schema"
import { MediaFileWhereUniqueInputObjectSchema } from "./objects/MediaFileWhereUniqueInput.schema"
import { MediaFileCountAggregateInputObjectSchema } from "./objects/MediaFileCountAggregateInput.schema"
import { MediaFileMinAggregateInputObjectSchema } from "./objects/MediaFileMinAggregateInput.schema"
import { MediaFileMaxAggregateInputObjectSchema } from "./objects/MediaFileMaxAggregateInput.schema"

export const MediaFileAggregateSchema = z.object({
  orderBy: z
    .union([MediaFileOrderByWithRelationInputObjectSchema, MediaFileOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: MediaFileWhereInputObjectSchema.optional(),
  cursor: MediaFileWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), MediaFileCountAggregateInputObjectSchema]).optional(),
  _min: MediaFileMinAggregateInputObjectSchema.optional(),
  _max: MediaFileMaxAggregateInputObjectSchema.optional(),
})
