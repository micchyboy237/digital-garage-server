import { z } from "zod"
import { NotificationCreateManyUserInputObjectSchema } from "./NotificationCreateManyUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NotificationCreateManyUserInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => NotificationCreateManyUserInputObjectSchema),
      z.lazy(() => NotificationCreateManyUserInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const NotificationCreateManyUserInputEnvelopeObjectSchema = Schema
