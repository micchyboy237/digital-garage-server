import { z } from "zod"
import { UserSubscriptionOrderByWithRelationInputObjectSchema } from "./objects/UserSubscriptionOrderByWithRelationInput.schema"
import { UserSubscriptionWhereInputObjectSchema } from "./objects/UserSubscriptionWhereInput.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./objects/UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionCountAggregateInputObjectSchema } from "./objects/UserSubscriptionCountAggregateInput.schema"
import { UserSubscriptionMinAggregateInputObjectSchema } from "./objects/UserSubscriptionMinAggregateInput.schema"
import { UserSubscriptionMaxAggregateInputObjectSchema } from "./objects/UserSubscriptionMaxAggregateInput.schema"

export const UserSubscriptionAggregateSchema = z.object({
  orderBy: z
    .union([UserSubscriptionOrderByWithRelationInputObjectSchema, UserSubscriptionOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: UserSubscriptionWhereInputObjectSchema.optional(),
  cursor: UserSubscriptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), UserSubscriptionCountAggregateInputObjectSchema]).optional(),
  _min: UserSubscriptionMinAggregateInputObjectSchema.optional(),
  _max: UserSubscriptionMaxAggregateInputObjectSchema.optional(),
})
