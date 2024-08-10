import { z } from "zod"
import { UserSubscriptionCountOutputTypeSelectObjectSchema } from "./UserSubscriptionCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => UserSubscriptionCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionCountOutputTypeArgsObjectSchema = Schema
