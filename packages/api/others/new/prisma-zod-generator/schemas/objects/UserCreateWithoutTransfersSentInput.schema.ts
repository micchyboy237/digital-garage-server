import { z } from "zod"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { SessionCreateNestedManyWithoutUserInputObjectSchema } from "./SessionCreateNestedManyWithoutUserInput.schema"
import { VehicleCreateNestedManyWithoutOwnerInputObjectSchema } from "./VehicleCreateNestedManyWithoutOwnerInput.schema"
import { VehiclePostCreateNestedManyWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateNestedManyWithoutCreatedByInput.schema"
import { VehicleTransferCreateNestedManyWithoutRecipientInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutRecipientInput.schema"
import { SubscriptionCreateNestedOneWithoutUserInputObjectSchema } from "./SubscriptionCreateNestedOneWithoutUserInput.schema"
import { VehicleOwnershipCreateNestedManyWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateNestedManyWithoutUserInput.schema"
import { AccountCreateNestedManyWithoutUserInputObjectSchema } from "./AccountCreateNestedManyWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateWithoutTransfersSentInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    firstName: z.string().optional().nullable(),
    lastName: z.string().optional().nullable(),
    displayPicture: z.string().optional().nullable(),
    location: z.string().optional().nullable(),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    sessions: z.lazy(() => SessionCreateNestedManyWithoutUserInputObjectSchema).optional(),
    vehicles: z.lazy(() => VehicleCreateNestedManyWithoutOwnerInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostCreateNestedManyWithoutCreatedByInputObjectSchema).optional(),
    transfersReceived: z.lazy(() => VehicleTransferCreateNestedManyWithoutRecipientInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionCreateNestedOneWithoutUserInputObjectSchema).optional(),
    vehicleOwnerships: z.lazy(() => VehicleOwnershipCreateNestedManyWithoutUserInputObjectSchema).optional(),
    accounts: z.lazy(() => AccountCreateNestedManyWithoutUserInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateWithoutTransfersSentInputObjectSchema = Schema
