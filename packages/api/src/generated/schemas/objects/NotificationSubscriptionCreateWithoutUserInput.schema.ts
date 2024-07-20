import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    category: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const NotificationSubscriptionCreateWithoutUserInputObjectSchema = Schema
