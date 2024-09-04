import { z } from "zod"
import { VehicleTransferWhereInputObjectSchema } from "./VehicleTransferWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferListRelationFilter> = z
  .object({
    every: z.lazy(() => VehicleTransferWhereInputObjectSchema).optional(),
    some: z.lazy(() => VehicleTransferWhereInputObjectSchema).optional(),
    none: z.lazy(() => VehicleTransferWhereInputObjectSchema).optional(),
  })
  .strict()

export const VehicleTransferListRelationFilterObjectSchema = Schema
