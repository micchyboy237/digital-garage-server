import { z } from "zod"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentUpdateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUpdateWithoutUserSubscriptionInput.schema"
import { PaymentUncheckedUpdateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUncheckedUpdateWithoutUserSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInput> = z
  .object({
    where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => PaymentUpdateWithoutUserSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedUpdateWithoutUserSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInputObjectSchema = Schema
