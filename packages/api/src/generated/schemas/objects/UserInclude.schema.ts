import { z } from "zod"
import { AuthArgsObjectSchema } from "./AuthArgs.schema"
import { SessionFindManySchema } from "../findManySession.schema"
import { UserSubscriptionArgsObjectSchema } from "./UserSubscriptionArgs.schema"
import { VehicleOwnershipFindManySchema } from "../findManyVehicleOwnership.schema"
import { DocumentFindManySchema } from "../findManyDocument.schema"
import { VehicleEventFindManySchema } from "../findManyVehicleEvent.schema"
import { NotificationSubscriptionFindManySchema } from "../findManyNotificationSubscription.schema"
import { NotificationFindManySchema } from "../findManyNotification.schema"
import { UserCountOutputTypeArgsObjectSchema } from "./UserCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserInclude> = z
  .object({
    auth: z.union([z.boolean(), z.lazy(() => AuthArgsObjectSchema)]).optional(),
    session: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    subscription: z.union([z.boolean(), z.lazy(() => UserSubscriptionArgsObjectSchema)]).optional(),
    vehicleOwnerships: z.union([z.boolean(), z.lazy(() => VehicleOwnershipFindManySchema)]).optional(),
    documents: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
    events: z.union([z.boolean(), z.lazy(() => VehicleEventFindManySchema)]).optional(),
    notificationSubs: z.union([z.boolean(), z.lazy(() => NotificationSubscriptionFindManySchema)]).optional(),
    notifications: z.union([z.boolean(), z.lazy(() => NotificationFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => UserCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const UserIncludeObjectSchema = Schema
