import { z } from "zod"
import { PaymentCreateWithoutSubscriptionInputObjectSchema } from "./PaymentCreateWithoutSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutSubscriptionInput.schema"
import { PaymentCreateOrConnectWithoutSubscriptionInputObjectSchema } from "./PaymentCreateOrConnectWithoutSubscriptionInput.schema"
import { PaymentUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema } from "./PaymentUpsertWithWhereUniqueWithoutSubscriptionInput.schema"
import { PaymentCreateManySubscriptionInputEnvelopeObjectSchema } from "./PaymentCreateManySubscriptionInputEnvelope.schema"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema } from "./PaymentUpdateWithWhereUniqueWithoutSubscriptionInput.schema"
import { PaymentUpdateManyWithWhereWithoutSubscriptionInputObjectSchema } from "./PaymentUpdateManyWithWhereWithoutSubscriptionInput.schema"
import { PaymentScalarWhereInputObjectSchema } from "./PaymentScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUncheckedUpdateManyWithoutSubscriptionNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => PaymentUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => PaymentCreateManySubscriptionInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => PaymentWhereUniqueInputObjectSchema), z.lazy(() => PaymentWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => PaymentUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PaymentUpdateManyWithWhereWithoutSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUpdateManyWithWhereWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const PaymentUncheckedUpdateManyWithoutSubscriptionNestedInputObjectSchema = Schema
