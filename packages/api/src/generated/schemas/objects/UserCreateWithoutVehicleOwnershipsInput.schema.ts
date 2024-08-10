import { z } from "zod"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { AuthCreateNestedOneWithoutUserInputObjectSchema } from "./AuthCreateNestedOneWithoutUserInput.schema"
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema"
import { UserSubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./UserSubscriptionCreateNestedOneWithoutUserInput.schema"
import { DocumentCreateNestedManyWithoutCreatedByInputObjectSchema } from "./DocumentCreateNestedManyWithoutCreatedByInput.schema"
import { VehicleEventCreateNestedManyWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateNestedManyWithoutCreatedByInput.schema"
import { NotificationSubscriptionCreateNestedManyWithoutUserInputObjectSchema } from "./NotificationSubscriptionCreateNestedManyWithoutUserInput.schema"
import { NotificationCreateNestedManyWithoutUserInputObjectSchema } from "./NotificationCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutVehicleOwnershipsInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => UserRoleSchema).optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string(),
    profilePicture: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    auth: z.lazy(() => AuthCreateNestedOneWithoutUserInputObjectSchema).optional(),
    session: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    notificationSubs: z.lazy(() => NotificationSubscriptionCreateNestedManyWithoutUserInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutVehicleOwnershipsInputObjectSchema = Schema
