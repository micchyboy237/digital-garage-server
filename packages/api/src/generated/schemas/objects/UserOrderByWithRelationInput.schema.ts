import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { SessionOrderByRelationAggregateInputObjectSchema } from "./SessionOrderByRelationAggregateInput.schema"
import { VehicleOrderByRelationAggregateInputObjectSchema } from "./VehicleOrderByRelationAggregateInput.schema"
import { VehiclePostOrderByRelationAggregateInputObjectSchema } from "./VehiclePostOrderByRelationAggregateInput.schema"
import { VehicleTransferOrderByRelationAggregateInputObjectSchema } from "./VehicleTransferOrderByRelationAggregateInput.schema"
import { SubscriptionOrderByWithRelationInputObjectSchema } from "./SubscriptionOrderByWithRelationInput.schema"
import { OwnershipOrderByRelationAggregateInputObjectSchema } from "./OwnershipOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    firebaseUid: z.lazy(() => SortOrderSchema).optional(),
    isEmailVerified: z.lazy(() => SortOrderSchema).optional(),
    firstName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    lastName: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    displayPicture: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    location: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    accountStatus: z.lazy(() => SortOrderSchema).optional(),
    sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleOrderByRelationAggregateInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostOrderByRelationAggregateInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferOrderByRelationAggregateInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferOrderByRelationAggregateInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionOrderByWithRelationInputObjectSchema).optional(),
    ownerships: z.lazy(() => OwnershipOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
