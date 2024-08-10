import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCountOutputTypeSelect> = z
  .object({
    events: z.boolean().optional(),
  })
  .strict()

export const VehicleOwnershipCountOutputTypeSelectObjectSchema = Schema
