import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { FloatFieldUpdateOperationsInputObjectSchema } from "./FloatFieldUpdateOperationsInput.schema"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"
import { EnumPaymentStatusFieldUpdateOperationsInputObjectSchema } from "./EnumPaymentStatusFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { SubscriptionUpdateOneWithoutPaymentsNestedInputObjectSchema } from "./SubscriptionUpdateOneWithoutPaymentsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    amount: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
    currency: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    status: z
      .union([z.lazy(() => PaymentStatusSchema), z.lazy(() => EnumPaymentStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    transactionDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    subscription: z.lazy(() => SubscriptionUpdateOneWithoutPaymentsNestedInputObjectSchema).optional(),
  })
  .strict()

export const PaymentUpdateInputObjectSchema = Schema
