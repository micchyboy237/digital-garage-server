import { z } from "zod"
import { VehiclePostCountOutputTypeSelectObjectSchema } from "./VehiclePostCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => VehiclePostCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const VehiclePostCountOutputTypeArgsObjectSchema = Schema
