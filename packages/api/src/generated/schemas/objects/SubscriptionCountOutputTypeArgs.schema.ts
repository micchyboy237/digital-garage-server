import { z } from "zod"
import { SubscriptionCountOutputTypeSelectObjectSchema } from "./SubscriptionCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => SubscriptionCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const SubscriptionCountOutputTypeArgsObjectSchema = Schema
