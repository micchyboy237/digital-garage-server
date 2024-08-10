import { z } from "zod"
import { NotificationSubscriptionSelectObjectSchema } from "./objects/NotificationSubscriptionSelect.schema"
import { NotificationSubscriptionIncludeObjectSchema } from "./objects/NotificationSubscriptionInclude.schema"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./objects/NotificationSubscriptionWhereUniqueInput.schema"
import { NotificationSubscriptionCreateInputObjectSchema } from "./objects/NotificationSubscriptionCreateInput.schema"
import { NotificationSubscriptionUncheckedCreateInputObjectSchema } from "./objects/NotificationSubscriptionUncheckedCreateInput.schema"
import { NotificationSubscriptionUpdateInputObjectSchema } from "./objects/NotificationSubscriptionUpdateInput.schema"
import { NotificationSubscriptionUncheckedUpdateInputObjectSchema } from "./objects/NotificationSubscriptionUncheckedUpdateInput.schema"

export const NotificationSubscriptionUpsertSchema = z.object({
  select: NotificationSubscriptionSelectObjectSchema.optional(),
  include: NotificationSubscriptionIncludeObjectSchema.optional(),
  where: NotificationSubscriptionWhereUniqueInputObjectSchema,
  create: z.union([NotificationSubscriptionCreateInputObjectSchema, NotificationSubscriptionUncheckedCreateInputObjectSchema]),
  update: z.union([NotificationSubscriptionUpdateInputObjectSchema, NotificationSubscriptionUncheckedUpdateInputObjectSchema]),
})
