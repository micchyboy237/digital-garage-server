import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"
import { EnumAccountStatusFieldUpdateOperationsInputObjectSchema } from "./EnumAccountStatusFieldUpdateOperationsInput.schema"
import { ProfileUpdateOneWithoutUserNestedInputObjectSchema } from "./ProfileUpdateOneWithoutUserNestedInput.schema"
import { SessionUpdateManyWithoutUserNestedInputObjectSchema } from "./SessionUpdateManyWithoutUserNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateWithoutSubscriptionInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    firebaseUid: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    accountStatus: z
      .union([z.lazy(() => AccountStatusSchema), z.lazy(() => EnumAccountStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    profile: z.lazy(() => ProfileUpdateOneWithoutUserNestedInputObjectSchema).optional(),
    sessions: z.lazy(() => SessionUpdateManyWithoutUserNestedInputObjectSchema).optional(),
  })
  .strict()

export const UserUpdateWithoutSubscriptionInputObjectSchema = Schema
