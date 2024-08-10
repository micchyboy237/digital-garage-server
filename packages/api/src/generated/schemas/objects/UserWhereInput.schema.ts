import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumUserRoleFilterObjectSchema } from "./EnumUserRoleFilter.schema"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { AuthRelationFilterObjectSchema } from "./AuthRelationFilter.schema"
import { AuthWhereInputObjectSchema } from "./AuthWhereInput.schema"
import { SessionListRelationFilterObjectSchema } from "./SessionListRelationFilter.schema"
import { UserSubscriptionRelationFilterObjectSchema } from "./UserSubscriptionRelationFilter.schema"
import { UserSubscriptionWhereInputObjectSchema } from "./UserSubscriptionWhereInput.schema"
import { VehicleOwnershipListRelationFilterObjectSchema } from "./VehicleOwnershipListRelationFilter.schema"
import { DocumentListRelationFilterObjectSchema } from "./DocumentListRelationFilter.schema"
import { VehicleEventListRelationFilterObjectSchema } from "./VehicleEventListRelationFilter.schema"
import { NotificationSubscriptionListRelationFilterObjectSchema } from "./NotificationSubscriptionListRelationFilter.schema"
import { NotificationListRelationFilterObjectSchema } from "./NotificationListRelationFilter.schema"

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
    role: z.union([z.lazy(() => EnumUserRoleFilterObjectSchema), z.lazy(() => UserRoleSchema)]).optional(),
    firstName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    lastName: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    email: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    profilePicture: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    location: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    auth: z
      .union([z.lazy(() => AuthRelationFilterObjectSchema), z.lazy(() => AuthWhereInputObjectSchema)])
      .optional()
      .nullable(),
    session: z.lazy(() => SessionListRelationFilterObjectSchema).optional(),
    subscription: z
      .union([z.lazy(() => UserSubscriptionRelationFilterObjectSchema), z.lazy(() => UserSubscriptionWhereInputObjectSchema)])
      .optional()
      .nullable(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipListRelationFilterObjectSchema).optional(),
    documents: z.lazy(() => DocumentListRelationFilterObjectSchema).optional(),
    events: z.lazy(() => VehicleEventListRelationFilterObjectSchema).optional(),
    notificationSubs: z.lazy(() => NotificationSubscriptionListRelationFilterObjectSchema).optional(),
    notifications: z.lazy(() => NotificationListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const UserWhereInputObjectSchema = Schema
