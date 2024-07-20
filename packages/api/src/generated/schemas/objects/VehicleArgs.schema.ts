import { z } from "zod"
import { VehicleSelectObjectSchema } from "./VehicleSelect.schema"
import { VehicleIncludeObjectSchema } from "./VehicleInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleArgs> = z
  .object({
    select: z.lazy(() => VehicleSelectObjectSchema).optional(),
    include: z.lazy(() => VehicleIncludeObjectSchema).optional(),
  })
  .strict()

export const VehicleArgsObjectSchema = Schema
