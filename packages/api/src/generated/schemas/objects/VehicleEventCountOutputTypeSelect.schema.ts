import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCountOutputTypeSelect> = z
  .object({
    documents: z.boolean().optional(),
  })
  .strict()

export const VehicleEventCountOutputTypeSelectObjectSchema = Schema
