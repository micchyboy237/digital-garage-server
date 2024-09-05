import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCountOutputTypeSelect> = z
  .object({
    posts: z.boolean().optional(),
    vehicleFiles: z.boolean().optional(),
  })
  .strict()

export const VehicleOwnershipCountOutputTypeSelectObjectSchema = Schema
