import { z } from "zod"
import { DocumentFindManySchema } from "../findManyDocument.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"
import { VehicleEventCountOutputTypeArgsObjectSchema } from "./VehicleEventCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventInclude> = z
  .object({
    documents: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicleOwnership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleEventCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleEventIncludeObjectSchema = Schema
