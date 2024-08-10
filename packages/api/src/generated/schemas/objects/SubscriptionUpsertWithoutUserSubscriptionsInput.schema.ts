import { z } from "zod"
import { SubscriptionUpdateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUpdateWithoutUserSubscriptionsInput.schema"
import { SubscriptionUncheckedUpdateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUncheckedUpdateWithoutUserSubscriptionsInput.schema"
import { SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionCreateWithoutUserSubscriptionsInput.schema"
import { SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutUserSubscriptionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUpsertWithoutUserSubscriptionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriptionUpdateWithoutUserSubscriptionsInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedUpdateWithoutUserSubscriptionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema),
    ]),
  })
  .strict()

export const SubscriptionUpsertWithoutUserSubscriptionsInputObjectSchema = Schema
