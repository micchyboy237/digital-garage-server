import { z } from "zod"
import { UserSubscriptionCreateManyInputObjectSchema } from "./objects/UserSubscriptionCreateManyInput.schema"

export const UserSubscriptionCreateManySchema = z.object({
  data: z.union([UserSubscriptionCreateManyInputObjectSchema, z.array(UserSubscriptionCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
