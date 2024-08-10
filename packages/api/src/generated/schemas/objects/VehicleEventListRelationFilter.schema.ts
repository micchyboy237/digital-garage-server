import { z } from "zod"
import { VehicleEventWhereInputObjectSchema } from "./VehicleEventWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventListRelationFilter> = z
  .object({
    every: z.lazy(() => VehicleEventWhereInputObjectSchema).optional(),
    some: z.lazy(() => VehicleEventWhereInputObjectSchema).optional(),
    none: z.lazy(() => VehicleEventWhereInputObjectSchema).optional(),
  })
  .strict()

export const VehicleEventListRelationFilterObjectSchema = Schema
