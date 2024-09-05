import { z } from "zod"
import { MediaFileArgsObjectSchema } from "./MediaFileArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { VehiclePostFindManySchema } from "../findManyVehiclePost.schema"
import { MediaFileFindManySchema } from "../findManyMediaFile.schema"
import { VehicleDetailsArgsObjectSchema } from "./VehicleDetailsArgs.schema"
import { VehicleOwnershipCountOutputTypeArgsObjectSchema } from "./VehicleOwnershipCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipInclude> = z
  .object({
    vehicleDisplayPhoto: z.union([z.boolean(), z.lazy(() => MediaFileArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    posts: z.union([z.boolean(), z.lazy(() => VehiclePostFindManySchema)]).optional(),
    vehicleFiles: z.union([z.boolean(), z.lazy(() => MediaFileFindManySchema)]).optional(),
    vehicleDetails: z.union([z.boolean(), z.lazy(() => VehicleDetailsArgsObjectSchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleOwnershipCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleOwnershipIncludeObjectSchema = Schema
