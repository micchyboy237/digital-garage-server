import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsAvgOrderByAggregateInput> = z
  .object({
    yearOfManufacture: z.lazy(() => SortOrderSchema).optional(),
    engineCapacity: z.lazy(() => SortOrderSchema).optional(),
    co2Emissions: z.lazy(() => SortOrderSchema).optional(),
    revenueWeight: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const VehicleDetailsAvgOrderByAggregateInputObjectSchema = Schema
