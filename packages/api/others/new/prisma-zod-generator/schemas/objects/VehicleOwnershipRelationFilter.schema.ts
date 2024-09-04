import { z } from "zod"
import { VehicleOwnershipWhereInputObjectSchema } from "./VehicleOwnershipWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipRelationFilter> = z
  .object({
    is: z
      .lazy(() => VehicleOwnershipWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VehicleOwnershipWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleOwnershipRelationFilterObjectSchema = Schema
