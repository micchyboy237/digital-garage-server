import { z } from "zod"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsInclude> = z
  .object({
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleDetailsIncludeObjectSchema = Schema
