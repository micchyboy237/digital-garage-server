import { z } from "zod"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentUpdateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUpdateWithoutUserSubscriptionInput.schema"
import { PaymentUncheckedUpdateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUncheckedUpdateWithoutUserSubscriptionInput.schema"
import { PaymentCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentCreateWithoutUserSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutUserSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInput> = z
  .object({
    where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => PaymentUpdateWithoutUserSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedUpdateWithoutUserSubscriptionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => PaymentCreateWithoutUserSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInputObjectSchema = Schema
