import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsAvgAggregateInputType> = z
  .object({
    yearOfManufacture: z.literal(true).optional(),
    engineCapacity: z.literal(true).optional(),
    co2Emissions: z.literal(true).optional(),
  })
  .strict()

export const VehicleDetailsAvgAggregateInputObjectSchema = Schema
