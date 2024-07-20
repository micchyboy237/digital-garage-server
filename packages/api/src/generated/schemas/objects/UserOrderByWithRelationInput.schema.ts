import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { AuthOrderByWithRelationInputObjectSchema } from "./AuthOrderByWithRelationInput.schema"
import { SessionOrderByWithRelationInputObjectSchema } from "./SessionOrderByWithRelationInput.schema"
import { UserSubscriptionOrderByWithRelationInputObjectSchema } from "./UserSubscriptionOrderByWithRelationInput.schema"
import { VehicleOwnershipOrderByRelationAggregateInputObjectSchema } from "./VehicleOwnershipOrderByRelationAggregateInput.schema"
import { DocumentOrderByRelationAggregateInputObjectSchema } from "./DocumentOrderByRelationAggregateInput.schema"
import { NotificationSubscriptionOrderByRelationAggregateInputObjectSchema } from "./NotificationSubscriptionOrderByRelationAggregateInput.schema"
import { NotificationOrderByRelationAggregateInputObjectSchema } from "./NotificationOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    role: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    lastName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    profilePicture: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    auth: z.lazy(() => AuthOrderByWithRelationInputObjectSchema).optional(),
    session: z.lazy(() => SessionOrderByWithRelationInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionOrderByWithRelationInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleOwnershipOrderByRelationAggregateInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentOrderByRelationAggregateInputObjectSchema).optional(),
    notificationSubs: z.lazy(() => NotificationSubscriptionOrderByRelationAggregateInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
