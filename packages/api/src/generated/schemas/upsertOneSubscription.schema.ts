import { z } from "zod"
import { SubscriptionSelectObjectSchema } from "./objects/SubscriptionSelect.schema"
import { SubscriptionIncludeObjectSchema } from "./objects/SubscriptionInclude.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./objects/SubscriptionWhereUniqueInput.schema"
import { SubscriptionCreateInputObjectSchema } from "./objects/SubscriptionCreateInput.schema"
import { SubscriptionUncheckedCreateInputObjectSchema } from "./objects/SubscriptionUncheckedCreateInput.schema"
import { SubscriptionUpdateInputObjectSchema } from "./objects/SubscriptionUpdateInput.schema"
import { SubscriptionUncheckedUpdateInputObjectSchema } from "./objects/SubscriptionUncheckedUpdateInput.schema"

export const SubscriptionUpsertSchema = z.object({
  select: SubscriptionSelectObjectSchema.optional(),
  include: SubscriptionIncludeObjectSchema.optional(),
  where: SubscriptionWhereUniqueInputObjectSchema,
  create: z.union([SubscriptionCreateInputObjectSchema, SubscriptionUncheckedCreateInputObjectSchema]),
  update: z.union([SubscriptionUpdateInputObjectSchema, SubscriptionUncheckedUpdateInputObjectSchema]),
})
