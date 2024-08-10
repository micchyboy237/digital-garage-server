import { z } from "zod"
import { DocumentWhereInputObjectSchema } from "./DocumentWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentRelationFilter> = z
  .object({
    is: z
      .lazy(() => DocumentWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => DocumentWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const DocumentRelationFilterObjectSchema = Schema
