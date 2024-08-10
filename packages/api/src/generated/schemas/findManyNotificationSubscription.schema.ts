import { z } from "zod"
import { NotificationSubscriptionSelectObjectSchema } from "./objects/NotificationSubscriptionSelect.schema"
import { NotificationSubscriptionIncludeObjectSchema } from "./objects/NotificationSubscriptionInclude.schema"
import { NotificationSubscriptionOrderByWithRelationInputObjectSchema } from "./objects/NotificationSubscriptionOrderByWithRelationInput.schema"
import { NotificationSubscriptionWhereInputObjectSchema } from "./objects/NotificationSubscriptionWhereInput.schema"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./objects/NotificationSubscriptionWhereUniqueInput.schema"
import { NotificationSubscriptionScalarFieldEnumSchema } from "./enums/NotificationSubscriptionScalarFieldEnum.schema"

export const NotificationSubscriptionFindManySchema = z.object({
  select: z.lazy(() => NotificationSubscriptionSelectObjectSchema.optional()),
  include: z.lazy(() => NotificationSubscriptionIncludeObjectSchema.optional()),
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
  distinct: z.array(NotificationSubscriptionScalarFieldEnumSchema).optional(),
})
