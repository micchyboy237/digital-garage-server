import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema } from "./EnumUserRoleFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { AuthUpdateOneWithoutUserNestedInputObjectSchema } from "./AuthUpdateOneWithoutUserNestedInput.schema"
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUpdateManyWithoutUserNestedInput.schema"
import { UserSubscriptionUpdateOneWithoutUserNestedInputObjectSchema } from "./UserSubscriptionUpdateOneWithoutUserNestedInput.schema"
import { VehicleOwnershipUpdateManyWithoutUserNestedInputObjectSchema } from "./VehicleOwnershipUpdateManyWithoutUserNestedInput.schema"
import { DocumentUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./DocumentUpdateManyWithoutCreatedByNestedInput.schema"
import { VehicleEventUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./VehicleEventUpdateManyWithoutCreatedByNestedInput.schema"
import { NotificationSubscriptionUpdateManyWithoutUserNestedInputObjectSchema } from "./NotificationSubscriptionUpdateManyWithoutUserNestedInput.schema"
import { NotificationUpdateManyWithoutUserNestedInputObjectSchema } from "./NotificationUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateInput> = z
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
    auth: z.lazy(() => AuthUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    session: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    notificationSubs: z.lazy(() => NotificationSubscriptionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    notifications: z.lazy(() => NotificationUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUpdateInputObjectSchema = Schema
