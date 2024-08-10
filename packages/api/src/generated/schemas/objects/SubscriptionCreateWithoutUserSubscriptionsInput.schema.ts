import { z } from "zod"
import { PaymentIntervalSchema } from "../enums/PaymentInterval.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateWithoutUserSubscriptionsInput> = z
  .object({
    id: z.string().optional(),
    name: z.string(),
    freeTrialDuration: z.number().optional().nullable(),
    price: z.number().optional().nullable(),
    currency: z.string().optional(),
    paymentInterval: z.lazy(() => PaymentIntervalSchema).optional(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
  })
  .strict()

export const SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema = Schema
