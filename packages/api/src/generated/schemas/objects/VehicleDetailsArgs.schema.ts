import { z } from "zod"
import { VehicleDetailsSelectObjectSchema } from "./VehicleDetailsSelect.schema"
import { VehicleDetailsIncludeObjectSchema } from "./VehicleDetailsInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsArgs> = z
  .object({
    select: z.lazy(() => VehicleDetailsSelectObjectSchema).optional(),
    include: z.lazy(() => VehicleDetailsIncludeObjectSchema).optional(),
  })
  .strict()

export const VehicleDetailsArgsObjectSchema = Schema
