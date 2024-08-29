import { z } from "zod"
import { VehicleTransferSelectObjectSchema } from "./VehicleTransferSelect.schema"
import { VehicleTransferIncludeObjectSchema } from "./VehicleTransferInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferArgs> = z
  .object({
    select: z.lazy(() => VehicleTransferSelectObjectSchema).optional(),
    include: z.lazy(() => VehicleTransferIncludeObjectSchema).optional(),
  })
  .strict()

export const VehicleTransferArgsObjectSchema = Schema
