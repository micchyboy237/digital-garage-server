import { z } from "zod"
import { UserSubscriptionSelectObjectSchema } from "./objects/UserSubscriptionSelect.schema"
import { UserSubscriptionIncludeObjectSchema } from "./objects/UserSubscriptionInclude.schema"
import { UserSubscriptionOrderByWithRelationInputObjectSchema } from "./objects/UserSubscriptionOrderByWithRelationInput.schema"
import { UserSubscriptionWhereInputObjectSchema } from "./objects/UserSubscriptionWhereInput.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./objects/UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionScalarFieldEnumSchema } from "./enums/UserSubscriptionScalarFieldEnum.schema"

export const UserSubscriptionFindFirstSchema = z.object({
  select: UserSubscriptionSelectObjectSchema.optional(),
  include: UserSubscriptionIncludeObjectSchema.optional(),
  orderBy: z
    .union([UserSubscriptionOrderByWithRelationInputObjectSchema, UserSubscriptionOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: UserSubscriptionWhereInputObjectSchema.optional(),
  cursor: UserSubscriptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(UserSubscriptionScalarFieldEnumSchema).optional(),
})
