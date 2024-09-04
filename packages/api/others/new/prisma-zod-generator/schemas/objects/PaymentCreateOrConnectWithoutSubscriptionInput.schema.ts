import { z } from "zod"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentCreateWithoutSubscriptionInputObjectSchema } from "./PaymentCreateWithoutSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateOrConnectWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => PaymentWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => PaymentCreateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const PaymentCreateOrConnectWithoutSubscriptionInputObjectSchema = Schema
