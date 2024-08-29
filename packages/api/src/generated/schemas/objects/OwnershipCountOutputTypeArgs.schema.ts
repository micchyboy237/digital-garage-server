import { z } from "zod"
import { OwnershipCountOutputTypeSelectObjectSchema } from "./OwnershipCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => OwnershipCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const OwnershipCountOutputTypeArgsObjectSchema = Schema
