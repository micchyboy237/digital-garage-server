import { z } from "zod"
import { OwnershipWhereInputObjectSchema } from "./OwnershipWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipRelationFilter> = z
  .object({
    is: z
      .lazy(() => OwnershipWhereInputObjectSchema)
      .optional()
      .nullable(),
    isNot: z
      .lazy(() => OwnershipWhereInputObjectSchema)
      .optional()
      .nullable(),
  })
  .strict()

export const OwnershipRelationFilterObjectSchema = Schema
