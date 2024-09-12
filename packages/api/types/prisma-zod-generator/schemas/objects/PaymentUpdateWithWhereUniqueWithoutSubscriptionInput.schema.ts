import { z } from "zod"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentUpdateWithoutSubscriptionInputObjectSchema } from "./PaymentUpdateWithoutSubscriptionInput.schema"
import { PaymentUncheckedUpdateWithoutSubscriptionInputObjectSchema } from "./PaymentUncheckedUpdateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PaymentUpdateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedUpdateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const PaymentUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema = Schema
