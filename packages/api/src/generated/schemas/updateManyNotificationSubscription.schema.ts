import { z } from "zod"
import { NotificationSubscriptionUpdateManyMutationInputObjectSchema } from "./objects/NotificationSubscriptionUpdateManyMutationInput.schema"
import { NotificationSubscriptionWhereInputObjectSchema } from "./objects/NotificationSubscriptionWhereInput.schema"

export const NotificationSubscriptionUpdateManySchema = z.object({
  data: NotificationSubscriptionUpdateManyMutationInputObjectSchema,
  where: NotificationSubscriptionWhereInputObjectSchema.optional(),
})
