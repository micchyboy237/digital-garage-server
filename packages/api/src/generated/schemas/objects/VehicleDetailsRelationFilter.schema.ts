import { z } from "zod"
import { VehicleDetailsWhereInputObjectSchema } from "./VehicleDetailsWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsRelationFilter> = z
  .object({
    is: z
      .lazy(() => VehicleDetailsWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VehicleDetailsWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDetailsRelationFilterObjectSchema = Schema
