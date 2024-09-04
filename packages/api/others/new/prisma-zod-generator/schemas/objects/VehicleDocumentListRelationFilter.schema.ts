import { z } from "zod"
import { VehicleDocumentWhereInputObjectSchema } from "./VehicleDocumentWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentListRelationFilter> = z
  .object({
    every: z.lazy(() => VehicleDocumentWhereInputObjectSchema).optional(),
    some: z.lazy(() => VehicleDocumentWhereInputObjectSchema).optional(),
    none: z.lazy(() => VehicleDocumentWhereInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentListRelationFilterObjectSchema = Schema
