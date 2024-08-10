import { z } from "zod"
import { UserSubscriptionUpdateManyMutationInputObjectSchema } from "./objects/UserSubscriptionUpdateManyMutationInput.schema"
import { UserSubscriptionWhereInputObjectSchema } from "./objects/UserSubscriptionWhereInput.schema"

export const UserSubscriptionUpdateManySchema = z.object({
  data: UserSubscriptionUpdateManyMutationInputObjectSchema,
  where: UserSubscriptionWhereInputObjectSchema.optional(),
})
