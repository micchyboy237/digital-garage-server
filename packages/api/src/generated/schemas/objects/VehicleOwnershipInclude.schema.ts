import { z } from "zod"
import { MediaFileArgsObjectSchema } from "./MediaFileArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { VehicleEventFindManySchema } from "../findManyVehicleEvent.schema"
import { VehicleOwnershipCountOutputTypeArgsObjectSchema } from "./VehicleOwnershipCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipInclude> = z
  .object({
    displayPicture: z.union([z.boolean(), z.lazy(() => MediaFileArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    events: z.union([z.boolean(), z.lazy(() => VehicleEventFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleOwnershipCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleOwnershipIncludeObjectSchema = Schema
