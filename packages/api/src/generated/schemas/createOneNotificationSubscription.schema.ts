import { z } from "zod"
import { NotificationSubscriptionSelectObjectSchema } from "./objects/NotificationSubscriptionSelect.schema"
import { NotificationSubscriptionIncludeObjectSchema } from "./objects/NotificationSubscriptionInclude.schema"
import { NotificationSubscriptionCreateInputObjectSchema } from "./objects/NotificationSubscriptionCreateInput.schema"
import { NotificationSubscriptionUncheckedCreateInputObjectSchema } from "./objects/NotificationSubscriptionUncheckedCreateInput.schema"

export const NotificationSubscriptionCreateOneSchema = z.object({
  select: NotificationSubscriptionSelectObjectSchema.optional(),
  include: NotificationSubscriptionIncludeObjectSchema.optional(),
  data: z.union([NotificationSubscriptionCreateInputObjectSchema, NotificationSubscriptionUncheckedCreateInputObjectSchema]),
})
