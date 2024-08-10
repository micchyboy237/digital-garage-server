import { z } from "zod"
import { UserSubscriptionCreateManySubscriptionInputObjectSchema } from "./UserSubscriptionCreateManySubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCreateManySubscriptionInputEnvelope> = z
  .object({
    data: z.union([
      z.lazy(() => UserSubscriptionCreateManySubscriptionInputObjectSchema),
      z.lazy(() => UserSubscriptionCreateManySubscriptionInputObjectSchema).array(),
    ]),
    skipDuplicates: z.boolean().optional(),
  })
  .strict()

export const UserSubscriptionCreateManySubscriptionInputEnvelopeObjectSchema = Schema
