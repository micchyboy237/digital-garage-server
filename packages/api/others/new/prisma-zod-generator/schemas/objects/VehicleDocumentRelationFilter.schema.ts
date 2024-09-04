import { z } from "zod"
import { VehicleDocumentWhereInputObjectSchema } from "./VehicleDocumentWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentRelationFilter> = z
  .object({
    is: z
      .lazy(() => VehicleDocumentWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => VehicleDocumentWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDocumentRelationFilterObjectSchema = Schema
