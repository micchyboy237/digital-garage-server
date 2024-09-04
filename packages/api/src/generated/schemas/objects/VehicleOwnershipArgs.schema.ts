import { z } from "zod"
import { VehicleOwnershipSelectObjectSchema } from "./VehicleOwnershipSelect.schema"
import { VehicleOwnershipIncludeObjectSchema } from "./VehicleOwnershipInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipArgs> = z
  .object({
    select: z.lazy(() => VehicleOwnershipSelectObjectSchema).optional(),
    include: z.lazy(() => VehicleOwnershipIncludeObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipArgsObjectSchema = Schema
