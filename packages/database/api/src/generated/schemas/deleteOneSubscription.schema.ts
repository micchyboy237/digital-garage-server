import { z } from "zod"
import { SubscriptionSelectObjectSchema } from "./objects/SubscriptionSelect.schema"
import { SubscriptionIncludeObjectSchema } from "./objects/SubscriptionInclude.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./objects/SubscriptionWhereUniqueInput.schema"

export const SubscriptionDeleteOneSchema = z.object({
  select: SubscriptionSelectObjectSchema.optional(),
  include: SubscriptionIncludeObjectSchema.optional(),
  where: SubscriptionWhereUniqueInputObjectSchema,
})
