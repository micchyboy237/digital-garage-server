import { z } from "zod"
import { VehiclePostWhereInputObjectSchema } from "./VehiclePostWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostListRelationFilter> = z
  .object({
    every: z.lazy(() => VehiclePostWhereInputObjectSchema).optional(),
    some: z.lazy(() => VehiclePostWhereInputObjectSchema).optional(),
    none: z.lazy(() => VehiclePostWhereInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostListRelationFilterObjectSchema = Schema
