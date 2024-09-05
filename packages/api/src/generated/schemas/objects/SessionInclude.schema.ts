import { z } from "zod"
import { AccountArgsObjectSchema } from "./AccountArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionInclude> = z
  .object({
    account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
  })
  .strict()

export const SessionIncludeObjectSchema = Schema
