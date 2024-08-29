import { z } from "zod"
import { OwnershipOrderByWithRelationInputObjectSchema } from "./objects/OwnershipOrderByWithRelationInput.schema"
import { OwnershipWhereInputObjectSchema } from "./objects/OwnershipWhereInput.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./objects/OwnershipWhereUniqueInput.schema"
import { OwnershipCountAggregateInputObjectSchema } from "./objects/OwnershipCountAggregateInput.schema"
import { OwnershipMinAggregateInputObjectSchema } from "./objects/OwnershipMinAggregateInput.schema"
import { OwnershipMaxAggregateInputObjectSchema } from "./objects/OwnershipMaxAggregateInput.schema"

export const OwnershipAggregateSchema = z.object({
  orderBy: z
    .union([OwnershipOrderByWithRelationInputObjectSchema, OwnershipOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: OwnershipWhereInputObjectSchema.optional(),
  cursor: OwnershipWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), OwnershipCountAggregateInputObjectSchema]).optional(),
  _min: OwnershipMinAggregateInputObjectSchema.optional(),
  _max: OwnershipMaxAggregateInputObjectSchema.optional(),
})
