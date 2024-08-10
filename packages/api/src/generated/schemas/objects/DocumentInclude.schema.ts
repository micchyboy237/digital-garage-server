import { z } from "zod"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { MediaFileFindManySchema } from "../findManyMediaFile.schema"
import { VehicleEventArgsObjectSchema } from "./VehicleEventArgs.schema"
import { DocumentCountOutputTypeArgsObjectSchema } from "./DocumentCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentInclude> = z
  .object({
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    files: z.union([z.boolean(), z.lazy(() => MediaFileFindManySchema)]).optional(),
    vehicleEvent: z.union([z.boolean(), z.lazy(() => VehicleEventArgsObjectSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => DocumentCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const DocumentIncludeObjectSchema = Schema
