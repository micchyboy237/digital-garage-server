import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { ProfileOrderByWithRelationInputObjectSchema } from "./ProfileOrderByWithRelationInput.schema"
import { SubscriptionOrderByWithRelationInputObjectSchema } from "./SubscriptionOrderByWithRelationInput.schema"
import { SessionOrderByRelationAggregateInputObjectSchema } from "./SessionOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    email: z.lazy(() => SortOrderSchema).optional(),
    password: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    firebaseUid: z.lazy(() => SortOrderSchema).optional(),
    provider: z.lazy(() => SortOrderSchema).optional(),
    accountStatus: z.lazy(() => SortOrderSchema).optional(),
    profile: z.lazy(() => ProfileOrderByWithRelationInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionOrderByWithRelationInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const UserOrderByWithRelationInputObjectSchema = Schema
