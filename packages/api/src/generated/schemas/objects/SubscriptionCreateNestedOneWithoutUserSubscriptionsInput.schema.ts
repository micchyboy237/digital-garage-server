import { z } from "zod"
import { SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionCreateWithoutUserSubscriptionsInput.schema"
import { SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutUserSubscriptionsInput.schema"
import { SubscriptionCreateOrConnectWithoutUserSubscriptionsInputObjectSchema } from "./SubscriptionCreateOrConnectWithoutUserSubscriptionsInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateNestedOneWithoutUserSubscriptionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SubscriptionCreateWithoutUserSubscriptionsInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutUserSubscriptionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutUserSubscriptionsInputObjectSchema).optional(),
    connect: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionCreateNestedOneWithoutUserSubscriptionsInputObjectSchema = Schema
