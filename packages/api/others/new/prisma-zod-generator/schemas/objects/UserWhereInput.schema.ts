import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { EnumAccountStatusFilterObjectSchema } from "./EnumAccountStatusFilter.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema"
import { VehicleListRelationFilterObjectSchema } from "./VehicleListRelationFilter.schema"
import { VehiclePostListRelationFilterObjectSchema } from "./VehiclePostListRelationFilter.schema"
import { VehicleTransferListRelationFilterObjectSchema } from "./VehicleTransferListRelationFilter.schema"
import { SubscriptionRelationFilterObjectSchema } from "./SubscriptionRelationFilter.schema"
import { SubscriptionWhereInputObjectSchema } from "./SubscriptionWhereInput.schema"
import { VehicleOwnershipListRelationFilterObjectSchema } from "./VehicleOwnershipListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => UserWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => UserWhereInputObjectSchema), z.lazy(() => UserWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    firebaseUid: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    isEmailVerified: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    firstName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lastName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    displayPicture: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    location: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    accountStatus: z.union([z.lazy(() => EnumAccountStatusFilterObjectSchema), z.lazy(() => AccountStatusSchema)]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    sessions: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleListRelationFilterObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostListRelationFilterObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferListRelationFilterObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferListRelationFilterObjectSchema).optional(),
    subscription: z
      .union([z.lazy(() => SubscriptionRelationFilterObjectSchema), z.lazy(() => SubscriptionWhereInputObjectSchema)])
      .optional()
      .nullable(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
