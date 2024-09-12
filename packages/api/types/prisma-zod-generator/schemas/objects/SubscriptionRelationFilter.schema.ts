import { z } from "zod"
import { SubscriptionWhereInputObjectSchema } from "./SubscriptionWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionRelationFilter> = z
  .object({
    is: z
      .lazy(() => SubscriptionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SubscriptionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const SubscriptionRelationFilterObjectSchema = Schema
