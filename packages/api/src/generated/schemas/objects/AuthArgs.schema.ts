import { z } from "zod"
import { AuthSelectObjectSchema } from "./AuthSelect.schema"
import { AuthIncludeObjectSchema } from "./AuthInclude.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthArgs> = z
  .object({
    select: z.lazy(() => AuthSelectObjectSchema).optional(),
    include: z.lazy(() => AuthIncludeObjectSchema).optional(),
  })
  .strict()

export const AuthArgsObjectSchema = Schema
