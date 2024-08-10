import { z } from "zod"
import { UserCreateNestedOneWithoutNotificationsInputObjectSchema } from "./UserCreateNestedOneWithoutNotificationsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationCreateInput> = z
  .object({
    id: z.string().optional(),
    title: z.string(),
    message: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutNotificationsInputObjectSchema),
  })
  .strict()

export const NotificationCreateInputObjectSchema = Schema
