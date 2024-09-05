import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { EnumAccountStatusFieldUpdateOperationsInputObjectSchema } from "./EnumAccountStatusFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { VehicleUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from "./VehicleUncheckedUpdateManyWithoutOwnerNestedInput.schema"
import { VehiclePostUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema } from "./VehiclePostUncheckedUpdateManyWithoutCreatedByNestedInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutSenderNestedInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutSenderNestedInput.schema"
import { SubscriptionUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from "./SubscriptionUncheckedUpdateOneWithoutUserNestedInput.schema"
import { VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInput.schema"
import { AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./AccountUncheckedUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutSessionsInput> = z
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
    displayPicture: z
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
    vehicles: z.lazy(() => VehicleUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUncheckedUpdateManyWithoutCreatedByNestedInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutSenderNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    accounts: z.lazy(() => AccountUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedUpdateWithoutSessionsInputObjectSchema = Schema
