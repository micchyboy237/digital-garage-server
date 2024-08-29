import { z } from "zod"
import { OwnershipWhereInputObjectSchema } from "./OwnershipWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipListRelationFilter> = z
  .object({
    every: z.lazy(() => OwnershipWhereInputObjectSchema).optional(),
    some: z.lazy(() => OwnershipWhereInputObjectSchema).optional(),
    none: z.lazy(() => OwnershipWhereInputObjectSchema).optional(),
  })
  .strict()

export const OwnershipListRelationFilterObjectSchema = Schema
