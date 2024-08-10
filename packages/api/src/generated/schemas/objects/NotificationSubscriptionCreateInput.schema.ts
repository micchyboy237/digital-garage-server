import { z } from "zod"
import { UserCreateNestedOneWithoutNotificationSubsInputObjectSchema } from "./UserCreateNestedOneWithoutNotificationSubsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionCreateInput> = z
  .object({
    id: z.string().optional(),
    category: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutNotificationSubsInputObjectSchema).optional(),
  })
  .strict()

export const NotificationSubscriptionCreateInputObjectSchema = Schema
