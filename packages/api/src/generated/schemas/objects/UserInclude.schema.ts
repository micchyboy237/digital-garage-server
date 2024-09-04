import { z } from "zod"
import { SessionFindManySchema } from "../findManySession.schema"
import { VehicleFindManySchema } from "../findManyVehicle.schema"
import { VehiclePostFindManySchema } from "../findManyVehiclePost.schema"
import { VehicleTransferFindManySchema } from "../findManyVehicleTransfer.schema"
import { SubscriptionArgsObjectSchema } from "./SubscriptionArgs.schema"
import { VehicleOwnershipFindManySchema } from "../findManyVehicleOwnership.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    vehicles: z.union([z.boolean(), z.lazy(() => VehicleFindManySchema)]).optional(),
    posts: z.union([z.boolean(), z.lazy(() => VehiclePostFindManySchema)]).optional(),
    transfersReceived: z.union([z.boolean(), z.lazy(() => VehicleTransferFindManySchema)]).optional(),
    transfersSent: z.union([z.boolean(), z.lazy(() => VehicleTransferFindManySchema)]).optional(),
    subscription: z.union([z.boolean(), z.lazy(() => SubscriptionArgsObjectSchema)]).optional(),
    vehicleOwnerships: z.union([z.boolean(), z.lazy(() => VehicleOwnershipFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
