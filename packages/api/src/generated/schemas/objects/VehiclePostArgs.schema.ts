import { z } from "zod"
import { VehiclePostSelectObjectSchema } from "./VehiclePostSelect.schema"
import { VehiclePostIncludeObjectSchema } from "./VehiclePostInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostArgs> = z
  .object({
    select: z.lazy(() => VehiclePostSelectObjectSchema).optional(),
    include: z.lazy(() => VehiclePostIncludeObjectSchema).optional(),
  })
  .strict()

export const VehiclePostArgsObjectSchema = Schema
