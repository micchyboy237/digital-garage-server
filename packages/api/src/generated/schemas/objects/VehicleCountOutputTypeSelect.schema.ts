import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCountOutputTypeSelect> = z
  .object({
    ownershipHistory: z.boolean().optional(),
    documents: z.boolean().optional(),
  })
  .strict()

export const VehicleCountOutputTypeSelectObjectSchema = Schema
