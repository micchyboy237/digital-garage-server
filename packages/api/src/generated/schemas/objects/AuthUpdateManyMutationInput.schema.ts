import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    password: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    googleId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    emailVerificationCode: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    emailVerificationExpiry: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    isEmailVerified: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()

export const AuthUpdateManyMutationInputObjectSchema = Schema
