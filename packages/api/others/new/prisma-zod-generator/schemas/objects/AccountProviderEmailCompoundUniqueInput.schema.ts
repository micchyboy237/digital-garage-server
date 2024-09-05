import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountProviderEmailCompoundUniqueInput> = z
  .object({
    provider: z.lazy(() => AuthProviderSchema),
    email: z.string(),
  })
  .strict()

export const AccountProviderEmailCompoundUniqueInputObjectSchema = Schema
