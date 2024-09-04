import { z } from "zod"
import { SubscriptionOrderByWithRelationInputObjectSchema } from "./objects/SubscriptionOrderByWithRelationInput.schema"
import { SubscriptionWhereInputObjectSchema } from "./objects/SubscriptionWhereInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./objects/SubscriptionWhereUniqueInput.schema"
import { SubscriptionScalarFieldEnumSchema } from "./enums/SubscriptionScalarFieldEnum.schema"

export const SubscriptionFindFirstSchema = z.object({
  orderBy: z
    .union([SubscriptionOrderByWithRelationInputObjectSchema, SubscriptionOrderByWithRelationInputObjectSchema.array()])
    .optional(),
  where: SubscriptionWhereInputObjectSchema.optional(),
  cursor: SubscriptionWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(SubscriptionScalarFieldEnumSchema).optional(),
})
