import { z } from "zod"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { MediaFileCreateNestedOneWithoutUserInputObjectSchema } from "./MediaFileCreateNestedOneWithoutUserInput.schema"
import { AuthCreateNestedOneWithoutUserInputObjectSchema } from "./AuthCreateNestedOneWithoutUserInput.schema"
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema"
import { UserSubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./UserSubscriptionCreateNestedOneWithoutUserInput.schema"
import { VehicleOwnershipCreateNestedManyWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateNestedManyWithoutUserInput.schema"
import { DocumentCreateNestedManyWithoutCreatedByInputObjectSchema } from "./DocumentCreateNestedManyWithoutCreatedByInput.schema"
import { VehicleEventCreateNestedManyWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateNestedManyWithoutCreatedByInput.schema"
import { NotificationCreateNestedManyWithoutUserInputObjectSchema } from "./NotificationCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutNotificationSubsInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => UserRoleSchema).optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string(),
    location: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    profilePicture: z.lazy(() => MediaFileCreateNestedOneWithoutUserInputObjectSchema).optional(),
    auth: z.lazy(() => AuthCreateNestedOneWithoutUserInputObjectSchema).optional(),
    session: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipCreateNestedManyWithoutUserInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutNotificationSubsInputObjectSchema = Schema
