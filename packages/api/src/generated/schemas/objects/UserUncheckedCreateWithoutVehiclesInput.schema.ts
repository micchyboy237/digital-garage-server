import { z } from "zod"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { AuthUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./AuthUncheckedCreateNestedOneWithoutUserInput.schema"
import { SessionUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedOneWithoutUserInput.schema"
import { UserSubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedCreateNestedOneWithoutUserInput.schema"
import { DocumentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./DocumentUncheckedCreateNestedManyWithoutCreatedByInput.schema"
import { NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInput.schema"
import { NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./NotificationUncheckedCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutVehiclesInput> = z
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
    auth: z.lazy(() => AuthUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    session: z.lazy(() => SessionUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    notificationSubs: z.lazy(() => NotificationSubscriptionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutVehiclesInputObjectSchema = Schema
