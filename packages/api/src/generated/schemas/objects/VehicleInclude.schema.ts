import { z } from "zod"
import { VehicleDetailsArgsObjectSchema } from "./VehicleDetailsArgs.schema"
import { VehicleOwnershipFindManySchema } from "../findManyVehicleOwnership.schema"
import { DocumentFindManySchema } from "../findManyDocument.schema"
import { VehicleEventFindManySchema } from "../findManyVehicleEvent.schema"
import { VehicleCountOutputTypeArgsObjectSchema } from "./VehicleCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleInclude> = z
  .object({
    details: z.union([z.boolean(), z.lazy(() => VehicleDetailsArgsObjectSchema)]).optional(),
    ownershipHistory: z.union([z.boolean(), z.lazy(() => VehicleOwnershipFindManySchema)]).optional(),
    documents: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
    events: z.union([z.boolean(), z.lazy(() => VehicleEventFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleIncludeObjectSchema = Schema
