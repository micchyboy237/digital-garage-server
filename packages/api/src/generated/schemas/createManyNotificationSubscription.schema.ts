import { z } from "zod"
import { NotificationSubscriptionCreateManyInputObjectSchema } from "./objects/NotificationSubscriptionCreateManyInput.schema"

export const NotificationSubscriptionCreateManySchema = z.object({
  data: z.union([
    NotificationSubscriptionCreateManyInputObjectSchema,
    z.array(NotificationSubscriptionCreateManyInputObjectSchema),
  ]),
  skipDuplicates: z.boolean().optional(),
})
