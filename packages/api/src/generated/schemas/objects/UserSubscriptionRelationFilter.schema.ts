import { z } from "zod"
import { UserSubscriptionWhereInputObjectSchema } from "./UserSubscriptionWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionRelationFilter> = z
  .object({
    is: z
      .lazy(() => UserSubscriptionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => UserSubscriptionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const UserSubscriptionRelationFilterObjectSchema = Schema
