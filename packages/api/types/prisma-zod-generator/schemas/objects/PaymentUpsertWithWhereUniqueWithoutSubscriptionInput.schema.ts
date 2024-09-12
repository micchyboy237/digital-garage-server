import { z } from "zod"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentUpdateWithoutSubscriptionInputObjectSchema } from "./PaymentUpdateWithoutSubscriptionInput.schema"
import { PaymentUncheckedUpdateWithoutSubscriptionInputObjectSchema } from "./PaymentUncheckedUpdateWithoutSubscriptionInput.schema"
import { PaymentCreateWithoutSubscriptionInputObjectSchema } from "./PaymentCreateWithoutSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PaymentUpdateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedUpdateWithoutSubscriptionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PaymentCreateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const PaymentUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema = Schema
