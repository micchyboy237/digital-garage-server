import { z } from "zod"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./NotificationSubscriptionWhereUniqueInput.schema"
import { NotificationSubscriptionCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionCreateWithoutUserInput.schema"
import { NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => NotificationSubscriptionCreateWithoutUserInputObjectSchema),
      z.lazy(() => NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const NotificationSubscriptionCreateOrConnectWithoutUserInputObjectSchema = Schema
