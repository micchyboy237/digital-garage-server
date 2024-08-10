import { z } from "zod"
import { NotificationSubscriptionWhereUniqueInputObjectSchema } from "./NotificationSubscriptionWhereUniqueInput.schema"
import { NotificationSubscriptionUpdateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUpdateWithoutUserInput.schema"
import { NotificationSubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUncheckedUpdateWithoutUserInput.schema"
import { NotificationSubscriptionCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionCreateWithoutUserInput.schema"
import { NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./NotificationSubscriptionUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInput> = z
  .object({
    where: z.lazy(() => NotificationSubscriptionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => NotificationSubscriptionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => NotificationSubscriptionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => NotificationSubscriptionCreateWithoutUserInputObjectSchema),
      z.lazy(() => NotificationSubscriptionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const NotificationSubscriptionUpsertWithWhereUniqueWithoutUserInputObjectSchema = Schema
