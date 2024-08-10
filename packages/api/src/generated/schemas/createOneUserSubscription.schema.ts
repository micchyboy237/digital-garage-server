import { z } from "zod"
import { UserSubscriptionSelectObjectSchema } from "./objects/UserSubscriptionSelect.schema"
import { UserSubscriptionIncludeObjectSchema } from "./objects/UserSubscriptionInclude.schema"
import { UserSubscriptionCreateInputObjectSchema } from "./objects/UserSubscriptionCreateInput.schema"
import { UserSubscriptionUncheckedCreateInputObjectSchema } from "./objects/UserSubscriptionUncheckedCreateInput.schema"

export const UserSubscriptionCreateOneSchema = z.object({
  select: UserSubscriptionSelectObjectSchema.optional(),
  include: UserSubscriptionIncludeObjectSchema.optional(),
  data: z.union([UserSubscriptionCreateInputObjectSchema, UserSubscriptionUncheckedCreateInputObjectSchema]),
})
