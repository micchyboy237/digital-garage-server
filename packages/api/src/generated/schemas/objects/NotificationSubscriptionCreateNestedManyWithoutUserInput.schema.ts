import { z } from "zod"
import { NotificationSubscriptionCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionCreateWithoutUserInput.schema"
import { NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUncheckedCreateWithoutUserInput.schema"
import { NotificationSubscriptionCreateOrConnectWithoutUserInputObjectSchema } from "./NotificationSubscriptionCreateOrConnectWithoutUserInput.schema"
import { NotificationSubscriptionCreateManyUserInputEnvelopeObjectSchema } from "./NotificationSubscriptionCreateManyUserInputEnvelope.schema"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./NotificationSubscriptionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionCreateNestedManyWithoutUserInput> = z
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
    createMany: z.lazy(() => NotificationSubscriptionCreateManyUserInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const NotificationSubscriptionCreateNestedManyWithoutUserInputObjectSchema = Schema
