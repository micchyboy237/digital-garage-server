import { z } from "zod"
import { NotificationSubscriptionWhereInputObjectSchema } from "./objects/NotificationSubscriptionWhereInput.schema"
import { NotificationSubscriptionOrderByWithAggregationInputObjectSchema } from "./objects/NotificationSubscriptionOrderByWithAggregationInput.schema"
import { NotificationSubscriptionScalarWhereWithAggregatesInputObjectSchema } from "./objects/NotificationSubscriptionScalarWhereWithAggregatesInput.schema"
import { NotificationSubscriptionScalarFieldEnumSchema } from "./enums/NotificationSubscriptionScalarFieldEnum.schema"

export const NotificationSubscriptionGroupBySchema = z.object({
  where: NotificationSubscriptionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      NotificationSubscriptionOrderByWithAggregationInputObjectSchema,
      NotificationSubscriptionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: NotificationSubscriptionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(NotificationSubscriptionScalarFieldEnumSchema),
})
