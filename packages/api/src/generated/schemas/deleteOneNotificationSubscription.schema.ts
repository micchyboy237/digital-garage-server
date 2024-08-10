import { z } from "zod"
import { NotificationSubscriptionSelectObjectSchema } from "./objects/NotificationSubscriptionSelect.schema"
import { NotificationSubscriptionIncludeObjectSchema } from "./objects/NotificationSubscriptionInclude.schema"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./objects/NotificationSubscriptionWhereUniqueInput.schema"

export const NotificationSubscriptionDeleteOneSchema = z.object({
  select: NotificationSubscriptionSelectObjectSchema.optional(),
  include: NotificationSubscriptionIncludeObjectSchema.optional(),
  where: NotificationSubscriptionWhereUniqueInputObjectSchema,
})
