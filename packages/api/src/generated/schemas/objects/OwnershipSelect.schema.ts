import { z } from "zod"
import { PhotoArgsObjectSchema } from "./PhotoArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { VehiclePostFindManySchema } from "../findManyVehiclePost.schema"
import { VehicleDocumentFindManySchema } from "../findManyVehicleDocument.schema"
import { OwnershipCountOutputTypeArgsObjectSchema } from "./OwnershipCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    vehicleId: z.boolean().optional(),
    isCurrentOwner: z.boolean().optional(),
    vehicleDisplayPhoto: z.union([z.boolean(), z.lazy(() => PhotoArgsObjectSchema)]).optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    posts: z.union([z.boolean(), z.lazy(() => VehiclePostFindManySchema)]).optional(),
    documents: z.union([z.boolean(), z.lazy(() => VehicleDocumentFindManySchema)]).optional(),
    excludedPosts: z.boolean().optional(),
    excludedPhotos: z.boolean().optional(),
    excludedDocs: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => OwnershipCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const OwnershipSelectObjectSchema = Schema
