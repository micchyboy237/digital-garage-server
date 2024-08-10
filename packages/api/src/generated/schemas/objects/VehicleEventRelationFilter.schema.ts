import { z } from "zod"
import { VehicleEventWhereInputObjectSchema } from "./VehicleEventWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventRelationFilter> = z
  .object({
    is: z
      .lazy(() => VehicleEventWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VehicleEventWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleEventRelationFilterObjectSchema = Schema
