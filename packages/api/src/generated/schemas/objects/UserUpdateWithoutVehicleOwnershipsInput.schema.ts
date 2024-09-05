import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { EnumAccountStatusFieldUpdateOperationsInputObjectSchema } from "./EnumAccountStatusFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { MediaFileUpdateOneWithoutUserDisplayPictureNestedInputObjectSchema } from "./MediaFileUpdateOneWithoutUserDisplayPictureNestedInput.schema"
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUpdateManyWithoutUserNestedInput.schema"
import { VehicleUpdateManyWithoutOwnerNestedInputObjectSchema } from "./VehicleUpdateManyWithoutOwnerNestedInput.schema"
import { VehiclePostUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./VehiclePostUpdateManyWithoutCreatedByNestedInput.schema"
import { VehicleTransferUpdateManyWithoutRecipientNestedInputObjectSchema } from "./VehicleTransferUpdateManyWithoutRecipientNestedInput.schema"
import { VehicleTransferUpdateManyWithoutSenderNestedInputObjectSchema } from "./VehicleTransferUpdateManyWithoutSenderNestedInput.schema"
import { SubscriptionUpdateOneWithoutUserNestedInputObjectSchema } from "./SubscriptionUpdateOneWithoutUserNestedInput.schema"
import { AccountUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateWithoutVehicleOwnershipsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    firstName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    lastName: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    location: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    accountStatus: z
      .union([z.lazy(() => AccountStatusSchema), z.lazy(() => EnumAccountStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    displayPicture: z.lazy(() => MediaFileUpdateOneWithoutUserDisplayPictureNestedInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferUpdateManyWithoutRecipientNestedInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferUpdateManyWithoutSenderNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    accounts: z.lazy(() => AccountUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUpdateWithoutVehicleOwnershipsInputObjectSchema = Schema
