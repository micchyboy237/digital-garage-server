import { z } from "zod"
import { SubscriptionSelectObjectSchema } from "./objects/SubscriptionSelect.schema"
import { SubscriptionIncludeObjectSchema } from "./objects/SubscriptionInclude.schema"
import { SubscriptionCreateInputObjectSchema } from "./objects/SubscriptionCreateInput.schema"
import { SubscriptionUncheckedCreateInputObjectSchema } from "./objects/SubscriptionUncheckedCreateInput.schema"

export const SubscriptionCreateOneSchema = z.object({
  select: SubscriptionSelectObjectSchema.optional(),
  include: SubscriptionIncludeObjectSchema.optional(),
  data: z.union([SubscriptionCreateInputObjectSchema, SubscriptionUncheckedCreateInputObjectSchema]),
})
