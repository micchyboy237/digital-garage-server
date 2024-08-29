import { z } from "zod"
import { VehicleCountOutputTypeSelectObjectSchema } from "./VehicleCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => VehicleCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const VehicleCountOutputTypeArgsObjectSchema = Schema
