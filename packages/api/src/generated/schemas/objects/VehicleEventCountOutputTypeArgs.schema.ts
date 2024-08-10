import { z } from "zod"
import { VehicleEventCountOutputTypeSelectObjectSchema } from "./VehicleEventCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => VehicleEventCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const VehicleEventCountOutputTypeArgsObjectSchema = Schema
