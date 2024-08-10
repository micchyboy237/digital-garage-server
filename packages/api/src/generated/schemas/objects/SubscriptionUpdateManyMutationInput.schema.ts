import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { NullableIntFieldUpdateOperationsInputObjectSchema } from "./NullableIntFieldUpdateOperationsInput.schema"
import { NullableFloatFieldUpdateOperationsInputObjectSchema } from "./NullableFloatFieldUpdateOperationsInput.schema"
import { PaymentIntervalSchema } from "../enums/PaymentInterval.schema"
import { EnumPaymentIntervalFieldUpdateOperationsInputObjectSchema } from "./EnumPaymentIntervalFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUpdateManyMutationInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    name: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    freeTrialDuration: z
      .union([z.number(), z.lazy(() => NullableIntFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    price: z
      .union([z.number(), z.lazy(() => NullableFloatFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    paymentInterval: z
      .union([z.lazy(() => PaymentIntervalSchema), z.lazy(() => EnumPaymentIntervalFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()

export const SubscriptionUpdateManyMutationInputObjectSchema = Schema
