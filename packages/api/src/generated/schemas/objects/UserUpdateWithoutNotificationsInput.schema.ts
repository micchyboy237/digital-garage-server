import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { UserRoleSchema } from "../enums/UserRole.schema"
import { EnumUserRoleFieldUpdateOperationsInputObjectSchema } from "./EnumUserRoleFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { AuthUpdateOneWithoutUserNestedInputObjectSchema } from "./AuthUpdateOneWithoutUserNestedInput.schema"
import { SessionUpdateOneWithoutUserNestedInputObjectSchema } from "./SessionUpdateOneWithoutUserNestedInput.schema"
import { UserSubscriptionUpdateOneWithoutUserNestedInputObjectSchema } from "./UserSubscriptionUpdateOneWithoutUserNestedInput.schema"
import { VehicleOwnershipUpdateManyWithoutUserNestedInputObjectSchema } from "./VehicleOwnershipUpdateManyWithoutUserNestedInput.schema"
import { DocumentUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./DocumentUpdateManyWithoutCreatedByNestedInput.schema"
import { NotificationSubscriptionUpdateManyWithoutUserNestedInputObjectSchema } from "./NotificationSubscriptionUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateWithoutNotificationsInput> = z
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
    session: z.lazy(() => SessionUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => UserSubscriptionUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleOwnershipUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    notificationSubs: z.lazy(() => NotificationSubscriptionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUpdateWithoutNotificationsInputObjectSchema = Schema
