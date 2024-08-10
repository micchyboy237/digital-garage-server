import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCountOutputTypeSelect> = z
  .object({
    payments: z.boolean().optional(),
  })
  .strict()

export const UserSubscriptionCountOutputTypeSelectObjectSchema = Schema
