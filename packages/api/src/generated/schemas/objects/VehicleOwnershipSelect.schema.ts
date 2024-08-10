import { z } from "zod"
import { MediaFileArgsObjectSchema } from "./MediaFileArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { VehicleEventFindManySchema } from "../findManyVehicleEvent.schema"
import { VehicleOwnershipCountOutputTypeArgsObjectSchema } from "./VehicleOwnershipCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    vehicleId: z.boolean().optional(),
    description: z.boolean().optional(),
    displayPicture: z.union([z.boolean(), z.lazy(() => MediaFileArgsObjectSchema)]).optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    events: z.union([z.boolean(), z.lazy(() => VehicleEventFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleOwnershipCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleOwnershipSelectObjectSchema = Schema
