import { z } from "zod"
import { OwnershipSelectObjectSchema } from "./OwnershipSelect.schema"
import { OwnershipIncludeObjectSchema } from "./OwnershipInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipArgs> = z
  .object({
    select: z.lazy(() => OwnershipSelectObjectSchema).optional(),
    include: z.lazy(() => OwnershipIncludeObjectSchema).optional(),
  })
  .strict()

export const OwnershipArgsObjectSchema = Schema
