import { z } from "zod"
import { PaymentCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentCreateWithoutUserSubscriptionInput.schema"
import { PaymentUncheckedCreateWithoutUserSubscriptionInputObjectSchema } from "./PaymentUncheckedCreateWithoutUserSubscriptionInput.schema"
import { PaymentCreateOrConnectWithoutUserSubscriptionInputObjectSchema } from "./PaymentCreateOrConnectWithoutUserSubscriptionInput.schema"
import { PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInputObjectSchema } from "./PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInput.schema"
import { PaymentCreateManyUserSubscriptionInputEnvelopeObjectSchema } from "./PaymentCreateManyUserSubscriptionInputEnvelope.schema"
import { PaymentWhereUniqueInputObjectSchema } from "./PaymentWhereUniqueInput.schema"
import { PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInputObjectSchema } from "./PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInput.schema"
import { PaymentUpdateManyWithWhereWithoutUserSubscriptionInputObjectSchema } from "./PaymentUpdateManyWithWhereWithoutUserSubscriptionInput.schema"
import { PaymentScalarWhereInputObjectSchema } from "./PaymentScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PaymentUpdateManyWithoutUserSubscriptionNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUpsertWithWhereUniqueWithoutUserSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => PaymentCreateManyUserSubscriptionInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUpdateWithWhereUniqueWithoutUserSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => PaymentUpdateManyWithWhereWithoutUserSubscriptionInputObjectSchema),
        z.lazy(() => PaymentUpdateManyWithWhereWithoutUserSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => PaymentScalarWhereInputObjectSchema), z.lazy(() => PaymentScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const PaymentUpdateManyWithoutUserSubscriptionNestedInputObjectSchema = Schema
