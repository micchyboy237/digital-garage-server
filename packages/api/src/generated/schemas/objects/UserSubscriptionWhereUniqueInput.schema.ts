import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    subscriptionId: z.string().optional(),
    userId: z.string().optional(),
  })
  .strict()

export const UserSubscriptionWhereUniqueInputObjectSchema = Schema
