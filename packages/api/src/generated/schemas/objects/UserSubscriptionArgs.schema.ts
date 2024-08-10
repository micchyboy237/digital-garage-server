import { z } from "zod"
import { UserSubscriptionSelectObjectSchema } from "./UserSubscriptionSelect.schema"
import { UserSubscriptionIncludeObjectSchema } from "./UserSubscriptionInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionArgs> = z
  .object({
    select: z.lazy(() => UserSubscriptionSelectObjectSchema).optional(),
    include: z.lazy(() => UserSubscriptionIncludeObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionArgsObjectSchema = Schema
