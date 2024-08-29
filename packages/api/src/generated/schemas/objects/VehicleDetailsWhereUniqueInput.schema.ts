import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    registrationNumber: z.string().optional(),
  })
  .strict()

export const VehicleDetailsWhereUniqueInputObjectSchema = Schema
