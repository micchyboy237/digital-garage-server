import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCountOutputTypeSelect> = z
  .object({
    payments: z.boolean().optional(),
  })
  .strict()

export const SubscriptionCountOutputTypeSelectObjectSchema = Schema
