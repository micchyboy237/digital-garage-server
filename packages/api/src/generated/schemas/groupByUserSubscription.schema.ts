import { z } from "zod"
import { UserSubscriptionWhereInputObjectSchema } from "./objects/UserSubscriptionWhereInput.schema"
import { UserSubscriptionOrderByWithAggregationInputObjectSchema } from "./objects/UserSubscriptionOrderByWithAggregationInput.schema"
import { UserSubscriptionScalarWhereWithAggregatesInputObjectSchema } from "./objects/UserSubscriptionScalarWhereWithAggregatesInput.schema"
import { UserSubscriptionScalarFieldEnumSchema } from "./enums/UserSubscriptionScalarFieldEnum.schema"

export const UserSubscriptionGroupBySchema = z.object({
  where: UserSubscriptionWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      UserSubscriptionOrderByWithAggregationInputObjectSchema,
      UserSubscriptionOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: UserSubscriptionScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(UserSubscriptionScalarFieldEnumSchema),
})
