import { z } from "zod"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./NotificationSubscriptionWhereUniqueInput.schema"
import { NotificationSubscriptionUpdateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUpdateWithoutUserInput.schema"
import { NotificationSubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => NotificationSubscriptionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => NotificationSubscriptionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const NotificationSubscriptionUpdateWithWhereUniqueWithoutUserInputObjectSchema = Schema
