import { z } from "zod"
import { VehiclePostArgsObjectSchema } from "./VehiclePostArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileInclude> = z
  .object({
    post: z.union([z.boolean(), z.lazy(() => VehiclePostArgsObjectSchema)]).optional(),
    userDisplayPicture: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicleDisplayPhotoOwnership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    ownership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
  })
  .strict()

export const MediaFileIncludeObjectSchema = Schema
