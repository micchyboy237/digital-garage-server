import { z } from "zod"
import { PaymentCreateWithoutSubscriptionInputObjectSchema } from "./PaymentCreateWithoutSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubscriptionInput.schema"
import { PaymentCreateOrConnectWithoutSubscriptionInputObjectSchema } from "./PaymentCreateOrConnectWithoutSubscriptionInput.schema"
import { PaymentCreateManySubscriptionInputEnvelopeObjectSchema } from "./PaymentCreateManySubscriptionInputEnvelope.schema"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentCreateNestedManyWithoutSubscriptionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => PaymentCreateWithoutSubscriptionInputObjectSchema),
        z.lazy(() => PaymentCreateWithoutSubscriptionInputObjectSchema).array(),
        z.lazy(() => PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => PaymentCreateOrConnectWithoutSubscriptionInputObjectSchema),
        z.lazy(() => PaymentCreateOrConnectWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => PaymentCreateManySubscriptionInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const PaymentCreateNestedManyWithoutSubscriptionInputObjectSchema = Schema
