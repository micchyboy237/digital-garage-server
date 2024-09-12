import { z } from "zod"
import { SubscriptionCreateManyInputObjectSchema } from "./objects/SubscriptionCreateManyInput.schema"

export const SubscriptionCreateManySchema = z.object({
  data: z.union([SubscriptionCreateManyInputObjectSchema, z.array(SubscriptionCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
