import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCountOutputTypeSelect> = z
  .object({
    files: z.boolean().optional(),
  })
  .strict()

export const VehiclePostCountOutputTypeSelectObjectSchema = Schema
