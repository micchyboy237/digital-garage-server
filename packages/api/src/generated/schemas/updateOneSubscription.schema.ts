import { z } from "zod"
import { SubscriptionSelectObjectSchema } from "./objects/SubscriptionSelect.schema"
import { SubscriptionIncludeObjectSchema } from "./objects/SubscriptionInclude.schema"
import { SubscriptionUpdateInputObjectSchema } from "./objects/SubscriptionUpdateInput.schema"
import { SubscriptionUncheckedUpdateInputObjectSchema } from "./objects/SubscriptionUncheckedUpdateInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./objects/SubscriptionWhereUniqueInput.schema"

export const SubscriptionUpdateOneSchema = z.object({
  select: SubscriptionSelectObjectSchema.optional(),
  include: SubscriptionIncludeObjectSchema.optional(),
  data: z.union([SubscriptionUpdateInputObjectSchema, SubscriptionUncheckedUpdateInputObjectSchema]),
  where: SubscriptionWhereUniqueInputObjectSchema,
})
