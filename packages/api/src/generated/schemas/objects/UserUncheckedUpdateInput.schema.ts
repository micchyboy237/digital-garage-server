import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { EnumAccountStatusFieldUpdateOperationsInputObjectSchema } from "./EnumAccountStatusFieldUpdateOperationsInput.schema"
import { ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from "./ProfileUncheckedUpdateOneWithoutUserNestedInput.schema"
import { SubscriptionUncheckedUpdateOneWithoutUserNestedInputObjectSchema } from "./SubscriptionUncheckedUpdateOneWithoutUserNestedInput.schema"
import { SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUncheckedUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    firebaseUid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    accountStatus: z
      .union([z.lazy(() => AccountStatusSchema), z.lazy(() => EnumAccountStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    profile: z.lazy(() => ProfileUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    subscription: z.lazy(() => SubscriptionUncheckedUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUncheckedUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedUpdateInputObjectSchema = Schema
