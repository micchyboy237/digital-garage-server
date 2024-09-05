import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { SessionFindManySchema } from "../findManySession.schema"
import { AccountCountOutputTypeArgsObjectSchema } from "./AccountCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountInclude> = z
  .object({
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    _count: z.union([z.boolean(), z.lazy(() => AccountCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const AccountIncludeObjectSchema = Schema
