import { z } from "zod"
import { PaymentCreateManySubscriptionInputObjectSchema } from "./PaymentCreateManySubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateManySubscriptionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => PaymentCreateManySubscriptionInputObjectSchema),
      z.lazy(() => PaymentCreateManySubscriptionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const PaymentCreateManySubscriptionInputEnvelopeObjectSchema = Schema
