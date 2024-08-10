import { z } from "zod"
import { UserSubscriptionWhereInputObjectSchema } from "./UserSubscriptionWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionListRelationFilter> = z
  .object({
    every: z.lazy(() => UserSubscriptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => UserSubscriptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => UserSubscriptionWhereInputObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionListRelationFilterObjectSchema = Schema
