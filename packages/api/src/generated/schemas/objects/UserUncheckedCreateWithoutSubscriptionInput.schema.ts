import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema"
import { VehicleUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from "./VehicleUncheckedCreateNestedManyWithoutOwnerInput.schema"
import { VehiclePostUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema } from "./VehiclePostUncheckedCreateNestedManyWithoutCreatedByInput.schema"
import { VehicleTransferUncheckedCreateNestedManyWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedCreateNestedManyWithoutRecipientInput.schema"
import { VehicleTransferUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedCreateNestedManyWithoutSenderInput.schema"
import { VehicleOwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedCreateNestedManyWithoutUserInput.schema"
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutSubscriptionInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firebaseUid: z.string(),
    isEmailVerified: z.boolean().optional(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    displayPicture: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUncheckedCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferUncheckedCreateNestedManyWithoutRecipientInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferUncheckedCreateNestedManyWithoutSenderInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutSubscriptionInputObjectSchema = Schema
