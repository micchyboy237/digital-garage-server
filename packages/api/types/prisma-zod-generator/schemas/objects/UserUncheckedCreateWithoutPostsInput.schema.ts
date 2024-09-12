import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./SessionUncheckedCreateNestedManyWithoutUserInput.schema"
import { VehicleUncheckedCreateNestedManyWithoutOwnerInputObjectSchema } from "./VehicleUncheckedCreateNestedManyWithoutOwnerInput.schema"
import { VehicleTransferUncheckedCreateNestedManyWithoutRecipientInputObjectSchema } from "./VehicleTransferUncheckedCreateNestedManyWithoutRecipientInput.schema"
import { VehicleTransferUncheckedCreateNestedManyWithoutSenderInputObjectSchema } from "./VehicleTransferUncheckedCreateNestedManyWithoutSenderInput.schema"
import { SubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionUncheckedCreateNestedOneWithoutUserInput.schema"
import { VehicleOwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedCreateNestedManyWithoutUserInput.schema"
import { AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema } from "./AccountUncheckedCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateWithoutPostsInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    displayPictureId: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z.lazy(() => SessionUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleUncheckedCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferUncheckedCreateNestedManyWithoutRecipientInputObjectSchema).optional(),
    transfersSent: z.lazy(() => VehicleTransferUncheckedCreateNestedManyWithoutSenderInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
    accounts: z.lazy(() => AccountUncheckedCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateWithoutPostsInputObjectSchema = Schema
