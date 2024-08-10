import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({
    session: z.boolean().optional(),
    vehicleOwnerships: z.boolean().optional(),
    documents: z.boolean().optional(),
    events: z.boolean().optional(),
    notificationSubs: z.boolean().optional(),
    notifications: z.boolean().optional(),
  })
  .strict()

export const UserCountOutputTypeSelectObjectSchema = Schema
