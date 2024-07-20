import { z } from "zod"
import { NotificationSubscriptionSelectObjectSchema } from "./objects/NotificationSubscriptionSelect.schema"
import { NotificationSubscriptionIncludeObjectSchema } from "./objects/NotificationSubscriptionInclude.schema"
import { NotificationSubscriptionUpdateInputObjectSchema } from "./objects/NotificationSubscriptionUpdateInput.schema"
import { NotificationSubscriptionUncheckedUpdateInputObjectSchema } from "./objects/NotificationSubscriptionUncheckedUpdateInput.schema"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./objects/NotificationSubscriptionWhereUniqueInput.schema"

export const NotificationSubscriptionUpdateOneSchema = z.object({
  select: NotificationSubscriptionSelectObjectSchema.optional(),
  include: NotificationSubscriptionIncludeObjectSchema.optional(),
  data: z.union([NotificationSubscriptionUpdateInputObjectSchema, NotificationSubscriptionUncheckedUpdateInputObjectSchema]),
  where: NotificationSubscriptionWhereUniqueInputObjectSchema,
})
