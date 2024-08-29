import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { EnumAccountStatusFieldUpdateOperationsInputObjectSchema } from "./EnumAccountStatusFieldUpdateOperationsInput.schema"
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema"
import { VehicleUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema } from "./VehicleUncheckedUpdateManyWithoutOwnerNestedInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutSenderNestedInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutSenderNestedInput.schema"
import { SubscriptionUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from "./SubscriptionUncheckedUpdateOneWithoutUserNestedInput.schema"
import { OwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./OwnershipUncheckedUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedUpdateWithoutPostsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    firebaseUid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
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
    sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleUncheckedUpdateManyWithoutOwnerNestedInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutRecipientNestedInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutSenderNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    ownerships: z.lazy(() => OwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedUpdateWithoutPostsInputObjectSchema = Schema
