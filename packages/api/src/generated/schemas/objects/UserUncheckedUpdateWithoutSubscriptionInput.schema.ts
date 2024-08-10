import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema } from "./EnumUserRoleFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { AuthUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from "./AuthUncheckedUpdateOneWithoutUserNestedInput.schema"
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema"
import { VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInput.schema"
import { DocumentUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./DocumentUncheckedUpdateManyWithoutCreatedByNestedInput.schema"
import { VehicleEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./VehicleEventUncheckedUpdateManyWithoutCreatedByNestedInput.schema"
import { NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput.schema"
import { NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./NotificationUncheckedUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSubscriptionInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    role: z.union([z.lazy(() => UserRoleSchema), z.lazy(() => EnumUserRoleFieldUpdateOperationsInputObjectSchema)]).optional(),
    firstName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    lastName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    profilePicture: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    location: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    auth: z.lazy(() => AuthUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    session: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    notificationSubs: z.lazy(() => NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedUpdateWithoutSubscriptionInputObjectSchema = Schema
