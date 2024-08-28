import { z } from "zod"
import { SubscriptionSelectObjectSchema } from "./objects/SubscriptionSelect.schema"
import { SubscriptionIncludeObjectSchema } from "./objects/SubscriptionInclude.schema"
import { SubscriptionOrderByWithRelationInputObjectSchema } from "./objects/SubscriptionOrderByWithRelationInput.schema"
import { SubscriptionWhereInputObjectSchema } from "./objects/SubscriptionWhereInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./objects/SubscriptionWhereUniqueInput.schema"
import { SubscriptionScalarFieldEnumSchema } from "./enums/SubscriptionScalarFieldEnum.schema"

export const SubscriptionFindFirstSchema = z.object({
  select: SubscriptionSelectObjectSchema.optional(),
  include: SubscriptionIncludeObjectSchema.optional(),
  orderBy: z
    .union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: SubscriptionWhereInputObjectSchema.optional(),
  cursor: SubscriptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SubscriptionScalarFieldEnumSchema).optional(),
})
