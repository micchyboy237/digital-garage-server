import { z } from "zod"
import { VehiclePostWhereInputObjectSchema } from "./VehiclePostWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostRelationFilter> = z
  .object({
    is: z
      .lazy(() => VehiclePostWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VehiclePostWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const VehiclePostRelationFilterObjectSchema = Schema
