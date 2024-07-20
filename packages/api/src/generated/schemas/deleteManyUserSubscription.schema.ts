import { z } from "zod"
import { UserSubscriptionWhereInputObjectSchema } from "./objects/UserSubscriptionWhereInput.schema"

export const UserSubscriptionDeleteManySchema = z.object({ where: UserSubscriptionWhereInputObjectSchema.optional() })
