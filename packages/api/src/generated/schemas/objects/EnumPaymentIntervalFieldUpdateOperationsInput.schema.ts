import { z } from "zod"
import { PaymentIntervalSchema } from "../enums/PaymentInterval.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumPaymentIntervalFieldUpdateOperationsInput> = z
  .object({
    set: z.lazy(() => PaymentIntervalSchema).optional(),
  })
  .strict()

export const EnumPaymentIntervalFieldUpdateOperationsInputObjectSchema = Schema
