import { z } from "zod"
import { NotificationSubscriptionWhereInputObjectSchema } from "./NotificationSubscriptionWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionListRelationFilter> = z
  .object({
    every: z.lazy(() => NotificationSubscriptionWhereInputObjectSchema).optional(),
    some: z.lazy(() => NotificationSubscriptionWhereInputObjectSchema).optional(),
    none: z.lazy(() => NotificationSubscriptionWhereInputObjectSchema).optional(),
  })
  .strict()

export const NotificationSubscriptionListRelationFilterObjectSchema = Schema
