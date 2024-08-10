import { z } from "zod"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { MediaFileUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./MediaFileUncheckedCreateNestedOneWithoutUserInput.schema"
import { AuthUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./AuthUncheckedCreateNestedOneWithoutUserInput.schema"
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema"
import { UserSubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedCreateNestedOneWithoutUserInput.schema"
import { VehicleOwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedCreateNestedManyWithoutUserInput.schema"
import { DocumentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedCreateNestedManyWithoutCreatedByInput.schema"
import { VehicleEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./VehicleEventUncheckedCreateNestedManyWithoutCreatedByInput.schema"
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./NotificationUncheckedCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutNotificationSubsInput> = z
  .object({
    id: z.string().optional(),
    role: z.lazy(() => UserRoleSchema).optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    email: z.string(),
    location: z.string().optional().nullable(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    profilePicture: z.lazy(() => MediaFileUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    auth: z.lazy(() => AuthUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    session: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutNotificationSubsInputObjectSchema = Schema
