import { z } from "zod"
import { NotificationSubscriptionCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionCreateWithoutUserInput.schema"
import { NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUncheckedCreateWithoutUserInput.schema"
import { NotificationSubscriptionCreateOrConnectWithoutUserInputObjectSchema } from "./NotificationSubscriptionCreateOrConnectWithoutUserInput.schema"
import { NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInput.schema"
import { NotificationSubscriptionCreateManyUserInputEnvelopeObjectSchema } from "./NotificationSubscriptionCreateManyUserInputEnvelope.schema"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./NotificationSubscriptionWhereUniqueInput.schema"
import { NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInput.schema"
import { NotificationSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema } from "./NotificationSubscriptionUpdateManyWithWhereWithoutUserInput.schema"
import { NotificationSubscriptionScalarWhereInputObjectSchema } from "./NotificationSubscriptionScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => NotificationSubscriptionCreateWithoutUserInputObjectSchema),
        z.lazy(() => NotificationSubscriptionCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => NotificationSubscriptionCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => NotificationSubscriptionCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => NotificationSubscriptionCreateManyUserInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => NotificationSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => NotificationSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema),
        z.lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const NotificationSubscriptionUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
