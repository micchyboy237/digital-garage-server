import { z } from "zod"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"
import { SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionCreateWithoutUserSubscriptionsInput.schema"
import { SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutUserSubscriptionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutUserSubscriptionsInput> = z
  .object({
    where: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema),
    ]),
  })
  .strict()

export const SubscriptionCreateOrConnectWithoutUserSubscriptionsInputObjectSchema = Schema
