import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCountOutputTypeSelect> = z
  .object({
    ownerships: z.boolean().optional(),
    transfers: z.boolean().optional(),
  })
  .strict()

export const VehicleCountOutputTypeSelectObjectSchema = Schema
