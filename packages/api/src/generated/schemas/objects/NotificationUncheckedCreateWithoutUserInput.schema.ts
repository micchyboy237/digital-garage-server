import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const NotificationUncheckedCreateWithoutUserInputObjectSchema = Schema
