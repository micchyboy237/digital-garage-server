import { z } from "zod"
import { NotificationSubscriptionOrderByWithRelationInputObjectSchema } from "./objects/NotificationSubscriptionOrderByWithRelationInput.schema"
import { NotificationSubscriptionWhereInputObjectSchema } from "./objects/NotificationSubscriptionWhereInput.schema"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./objects/NotificationSubscriptionWhereUniqueInput.schema"
import { NotificationSubscriptionCountAggregateInputObjectSchema } from "./objects/NotificationSubscriptionCountAggregateInput.schema"
import { NotificationSubscriptionMinAggregateInputObjectSchema } from "./objects/NotificationSubscriptionMinAggregateInput.schema"
import { NotificationSubscriptionMaxAggregateInputObjectSchema } from "./objects/NotificationSubscriptionMaxAggregateInput.schema"

export const NotificationSubscriptionAggregateSchema = z.object({
  orderBy: z
    .union([
      NotificationSubscriptionOrderByWithRelationInputObjectSchema,
      NotificationSubscriptionOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: NotificationSubscriptionWhereInputObjectSchema.optional(),
  cursor: NotificationSubscriptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  _count: z.union([z.literal(true), NotificationSubscriptionCountAggregateInputObjectSchema]).optional(),
  _min: NotificationSubscriptionMinAggregateInputObjectSchema.optional(),
  _max: NotificationSubscriptionMaxAggregateInputObjectSchema.optional(),
})
