import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCountOutputTypeSelect> = z
  .object({
    sessions: z.boolean().optional(),
    vehicles: z.boolean().optional(),
    posts: z.boolean().optional(),
    transfersReceived: z.boolean().optional(),
    transfersSent: z.boolean().optional(),
    vehicleOwnerships: z.boolean().optional(),
  })
  .strict()

export const UserCountOutputTypeSelectObjectSchema = Schema
