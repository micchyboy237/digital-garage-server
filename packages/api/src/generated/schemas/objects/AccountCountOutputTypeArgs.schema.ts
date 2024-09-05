import { z } from "zod"
import { AccountCountOutputTypeSelectObjectSchema } from "./AccountCountOutputTypeSelect.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCountOutputTypeArgs> = z
  .object({
    select: z.lazy(() => AccountCountOutputTypeSelectObjectSchema).optional(),
  })
  .strict()

export const AccountCountOutputTypeArgsObjectSchema = Schema
