import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    message: z.string(),
    userId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const NotificationUncheckedCreateInputObjectSchema = Schema
