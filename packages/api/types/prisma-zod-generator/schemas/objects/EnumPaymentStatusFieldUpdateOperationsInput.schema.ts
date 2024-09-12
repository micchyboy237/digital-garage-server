import { z } from "zod"
import { PaymentStatusSchema } from "../enums/PaymentStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumPaymentStatusFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PaymentStatusSchema).optional(),
  })
  .strict()

export const EnumPaymentStatusFieldUpdateOperationsInputObjectSchema = Schema
