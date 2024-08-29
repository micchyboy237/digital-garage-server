import { z } from "zod"
import { PhotoArgsObjectSchema } from "./PhotoArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { VehiclePostFindManySchema } from "../findManyVehiclePost.schema"
import { VehicleDocumentFindManySchema } from "../findManyVehicleDocument.schema"
import { OwnershipCountOutputTypeArgsObjectSchema } from "./OwnershipCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipInclude> = z
  .object({
    vehicleDisplayPhoto: z.union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    posts: z.union([z.boolean(), z.lazy(() => VehiclePostFindManySchema)]).optional(),
    documents: z.union([z.boolean(), z.lazy(() => VehicleDocumentFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => OwnershipCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const OwnershipIncludeObjectSchema = Schema
