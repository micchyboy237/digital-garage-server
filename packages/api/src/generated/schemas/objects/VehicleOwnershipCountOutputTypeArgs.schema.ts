import { z } from "zod"
import { VehicleOwnershipCountOutputTypeSelectObjectSchema } from "./VehicleOwnershipCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => VehicleOwnershipCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCountOutputTypeArgsObjectSchema = Schema
