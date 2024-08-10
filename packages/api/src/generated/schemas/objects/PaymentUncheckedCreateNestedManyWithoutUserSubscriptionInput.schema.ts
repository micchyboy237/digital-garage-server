import { z } from "zod"
import { PaymentCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentCreateWithoutUserSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutUserSubscriptionInput.schema"
import { PaymentCreateOrConnectWithoutUserSubscriptionInputObjectSchema } from "./PaymentCreateOrConnectWithoutUserSubscriptionInput.schema"
import { PaymentCreateManyUserSubscriptionInputEnvelopeObjectSchema } from "./PaymentCreateManyUserSubscriptionInputEnvelope.schema"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PaymentCreateWithoutUserSubscriptionInputObjectSchema),
        z.lazy(() => PaymentCreateWithoutUserSubscriptionInputObjectSchema).array(),
        z.lazy(() => PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PaymentCreateOrConnectWithoutUserSubscriptionInputObjectSchema),
        z.lazy(() => PaymentCreateOrConnectWithoutUserSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => PaymentCreateManyUserSubscriptionInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const PaymentUncheckedCreateNestedManyWithoutUserSubscriptionInputObjectSchema = Schema
