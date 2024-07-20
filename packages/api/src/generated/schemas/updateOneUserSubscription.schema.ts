import { z } from "zod"
import { UserSubscriptionSelectObjectSchema } from "./objects/UserSubscriptionSelect.schema"
import { UserSubscriptionIncludeObjectSchema } from "./objects/UserSubscriptionInclude.schema"
import { UserSubscriptionUpdateInputObjectSchema } from "./objects/UserSubscriptionUpdateInput.schema"
import { UserSubscriptionUncheckedUpdateInputObjectSchema } from "./objects/UserSubscriptionUncheckedUpdateInput.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./objects/UserSubscriptionWhereUniqueInput.schema"

export const UserSubscriptionUpdateOneSchema = z.object({
  select: UserSubscriptionSelectObjectSchema.optional(),
  include: UserSubscriptionIncludeObjectSchema.optional(),
  data: z.union([UserSubscriptionUpdateInputObjectSchema, UserSubscriptionUncheckedUpdateInputObjectSchema]),
  where: UserSubscriptionWhereUniqueInputObjectSchema,
})
