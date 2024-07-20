import { z } from "zod"
import { NotificationSubscriptionCreateManyUserInputObjectSchema } from "./NotificationSubscriptionCreateManyUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationSubscriptionCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => NotificationSubscriptionCreateManyUserInputObjectSchema),
      z.lazy(() => NotificationSubscriptionCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const NotificationSubscriptionCreateManyUserInputEnvelopeObjectSchema = Schema
