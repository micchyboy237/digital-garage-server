import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { EnumAuthProviderFieldUpdateOperationsInputObjectSchema } from "./EnumAuthProviderFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutAccountsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountUpdateWithoutSessionsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    provider: z
      .union([z.lazy(() => AuthProviderSchema), z.lazy(() => EnumAuthProviderFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    lastLogin: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    email: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneRequiredWithoutAccountsNestedInputObjectSchema).optional(),
  })
  .strict()

export const AccountUpdateWithoutSessionsInputObjectSchema = Schema
