import { z } from "zod"
import { NotificationSubscriptionScalarWhereInputObjectSchema } from "./NotificationSubscriptionScalarWhereInput.schema"
import { NotificationSubscriptionUpdateManyMutationInputObjectSchema } from "./NotificationSubscriptionUpdateManyMutationInput.schema"
import { NotificationSubscriptionUncheckedUpdateManyWithoutNotificationSubsInputObjectSchema } from "./NotificationSubscriptionUncheckedUpdateManyWithoutNotificationSubsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => NotificationSubscriptionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => NotificationSubscriptionUpdateManyMutationInputObjectSchema),
      z.lazy(() => NotificationSubscriptionUncheckedUpdateManyWithoutNotificationSubsInputObjectSchema),
    ]),
  })
  .strict()

export const NotificationSubscriptionUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
