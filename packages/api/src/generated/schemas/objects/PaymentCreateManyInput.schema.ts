import { z } from "zod"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateManyInput> = z
  .object({
    id: z.string().optional(),
    amount: z.number(),
    currency: z.string(),
    paymentDate: z.coerce.date().optional(),
    userSubscriptionId: z.string(),
    stripePaymentId: z.string().optional().nullable(),
    iapPaymentId: z.string().optional().nullable(),
  })
  .strict()

export const PaymentCreateManyInputObjectSchema = Schema
