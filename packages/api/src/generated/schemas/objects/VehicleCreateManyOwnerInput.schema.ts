import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateManyOwnerInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    registrationNumber: z.string(),
  })
  .strict()

export const VehicleCreateManyOwnerInputObjectSchema = Schema
