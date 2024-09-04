import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    registrationNumber: z.string().optional(),
    ownerId: z.string().optional(),
  })
  .strict()

export const VehicleWhereUniqueInputObjectSchema = Schema
