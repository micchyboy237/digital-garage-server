import { z } from "zod"
import { SessionWhereInputObjectSchema } from "./SessionWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionRelationFilter> = z
  .object({
    is: z
      .lazy(() => SessionWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => SessionWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const SessionRelationFilterObjectSchema = Schema
