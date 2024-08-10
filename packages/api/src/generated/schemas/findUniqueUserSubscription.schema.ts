import { z } from "zod"
import { UserSubscriptionSelectObjectSchema } from "./objects/UserSubscriptionSelect.schema"
import { UserSubscriptionIncludeObjectSchema } from "./objects/UserSubscriptionInclude.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./objects/UserSubscriptionWhereUniqueInput.schema"

export const UserSubscriptionFindUniqueSchema = z.object({
  select: UserSubscriptionSelectObjectSchema.optional(),
  include: UserSubscriptionIncludeObjectSchema.optional(),
  where: UserSubscriptionWhereUniqueInputObjectSchema,
})
