import { z } from "zod"
import { SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionCreateWithoutUserSubscriptionsInput.schema"
import { SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutUserSubscriptionsInput.schema"
import { SubscriptionCreateOrConnectWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionCreateOrConnectWithoutUserSubscriptionsInput.schema"
import { SubscriptionUpsertWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUpsertWithoutUserSubscriptionsInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"
import { SubscriptionUpdateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUpdateWithoutUserSubscriptionsInput.schema"
import { SubscriptionUncheckedUpdateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUncheckedUpdateWithoutUserSubscriptionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutUserSubscriptionsInputObjectSchema).optional(),
    upsert: z.lazy(() => SubscriptionUpsertWithoutUserSubscriptionsInputObjectSchema).optional(),
    connect: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => SubscriptionUpdateWithoutUserSubscriptionsInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutUserSubscriptionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const SubscriptionUpdateOneRequiredWithoutUserSubscriptionsNestedInputObjectSchema = Schema
