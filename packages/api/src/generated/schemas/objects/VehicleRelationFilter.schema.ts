import { z } from "zod"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleRelationFilter> = z
  .object({
    is: z
      .lazy(() => VehicleWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VehicleWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleRelationFilterObjectSchema = Schema
