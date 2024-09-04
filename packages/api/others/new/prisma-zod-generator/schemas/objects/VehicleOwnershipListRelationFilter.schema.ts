import { z } from "zod"
import { VehicleOwnershipWhereInputObjectSchema } from "./VehicleOwnershipWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipListRelationFilter> = z
  .object({
    every: z.lazy(() => VehicleOwnershipWhereInputObjectSchema).optional(),
    some: z.lazy(() => VehicleOwnershipWhereInputObjectSchema).optional(),
    none: z.lazy(() => VehicleOwnershipWhereInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipListRelationFilterObjectSchema = Schema
