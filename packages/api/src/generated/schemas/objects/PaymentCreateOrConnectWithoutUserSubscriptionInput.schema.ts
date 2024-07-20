import { z } from "zod"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentCreateWithoutUserSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutUserSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutUserSubscriptionInput> = z
  .object({
    where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PaymentCreateWithoutUserSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const PaymentCreateOrConnectWithoutUserSubscriptionInputObjectSchema = Schema
