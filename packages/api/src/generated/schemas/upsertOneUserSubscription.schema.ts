import { z } from "zod"
import { UserSubscriptionSelectObjectSchema } from "./objects/UserSubscriptionSelect.schema"
import { UserSubscriptionIncludeObjectSchema } from "./objects/UserSubscriptionInclude.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./objects/UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionCreateInputObjectSchema } from "./objects/UserSubscriptionCreateInput.schema"
import { UserSubscriptionUncheckedCreateInputObjectSchema } from "./objects/UserSubscriptionUncheckedCreateInput.schema"
import { UserSubscriptionUpdateInputObjectSchema } from "./objects/UserSubscriptionUpdateInput.schema"
import { UserSubscriptionUncheckedUpdateInputObjectSchema } from "./objects/UserSubscriptionUncheckedUpdateInput.schema"

export const UserSubscriptionUpsertSchema = z.object({
  select: UserSubscriptionSelectObjectSchema.optional(),
  include: UserSubscriptionIncludeObjectSchema.optional(),
  where: UserSubscriptionWhereUniqueInputObjectSchema,
  create: z.union([UserSubscriptionCreateInputObjectSchema, UserSubscriptionUncheckedCreateInputObjectSchema]),
  update: z.union([UserSubscriptionUpdateInputObjectSchema, UserSubscriptionUncheckedUpdateInputObjectSchema]),
})
