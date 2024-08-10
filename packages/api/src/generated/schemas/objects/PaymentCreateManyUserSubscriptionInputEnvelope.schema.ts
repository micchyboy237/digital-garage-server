import { z } from "zod"
import { PaymentCreateManyUserSubscriptionInputObjectSchema } from "./PaymentCreateManyUserSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateManyUserSubscriptionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PaymentCreateManyUserSubscriptionInputObjectSchema),
      z.lazy(() => PaymentCreateManyUserSubscriptionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PaymentCreateManyUserSubscriptionInputEnvelopeObjectSchema = Schema
