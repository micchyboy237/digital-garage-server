import { z } from "zod"
import { VehicleEventSelectObjectSchema } from "./VehicleEventSelect.schema"
import { VehicleEventIncludeObjectSchema } from "./VehicleEventInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventArgs> = z
  .object({
    select: z.lazy(() => VehicleEventSelectObjectSchema).optional(),
    include: z.lazy(() => VehicleEventIncludeObjectSchema).optional(),
  })
  .strict()

export const VehicleEventArgsObjectSchema = Schema
