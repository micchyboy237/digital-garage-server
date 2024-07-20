import { z } from "zod"
import { NotificationSubscriptionWhereInputObjectSchema } from "./objects/NotificationSubscriptionWhereInput.schema"

export const NotificationSubscriptionDeleteManySchema = z.object({
  where: NotificationSubscriptionWhereInputObjectSchema.optional(),
})
