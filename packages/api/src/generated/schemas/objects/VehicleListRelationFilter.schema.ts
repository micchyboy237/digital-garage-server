import { z } from "zod"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleListRelationFilter> = z
  .object({
    every: z.lazy(() => VehicleWhereInputObjectSchema).optional(),
    some: z.lazy(() => VehicleWhereInputObjectSchema).optional(),
    none: z.lazy(() => VehicleWhereInputObjectSchema).optional(),
  })
  .strict()

export const VehicleListRelationFilterObjectSchema = Schema
