import { z } from "zod"
import { NotificationSubscriptionSelectObjectSchema } from "./NotificationSubscriptionSelect.schema"
import { NotificationSubscriptionIncludeObjectSchema } from "./NotificationSubscriptionInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionArgs> = z
  .object({
    select: z.lazy(() => NotificationSubscriptionSelectObjectSchema).optional(),
    include: z.lazy(() => NotificationSubscriptionIncludeObjectSchema).optional(),
  })
  .strict()

export const NotificationSubscriptionArgsObjectSchema = Schema
