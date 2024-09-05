import { z } from "zod"
import { AccountWhereInputObjectSchema } from "./AccountWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountRelationFilter> = z
  .object({
    is: z
      .lazy(() => AccountWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => AccountWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const AccountRelationFilterObjectSchema = Schema
