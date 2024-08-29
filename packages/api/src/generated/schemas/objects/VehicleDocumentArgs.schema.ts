import { z } from "zod"
import { VehicleDocumentSelectObjectSchema } from "./VehicleDocumentSelect.schema"
import { VehicleDocumentIncludeObjectSchema } from "./VehicleDocumentInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentArgs> = z
  .object({
    select: z.lazy(() => VehicleDocumentSelectObjectSchema).optional(),
    include: z.lazy(() => VehicleDocumentIncludeObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentArgsObjectSchema = Schema
