import { z } from "zod"
import { SubscriptionSelectObjectSchema } from "./SubscriptionSelect.schema"
import { SubscriptionIncludeObjectSchema } from "./SubscriptionInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionArgs> = z
  .object({
    select: z.lazy(() => SubscriptionSelectObjectSchema).optional(),
    include: z.lazy(() => SubscriptionIncludeObjectSchema).optional(),
  })
  .strict()

export const SubscriptionArgsObjectSchema = Schema
