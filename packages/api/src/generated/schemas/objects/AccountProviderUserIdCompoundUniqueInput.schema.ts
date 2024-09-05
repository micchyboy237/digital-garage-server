import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountProviderUserIdCompoundUniqueInput> = z
  .object({
    provider: z.lazy(() => AuthProviderSchema),
    userId: z.string(),
  })
  .strict()

export const AccountProviderUserIdCompoundUniqueInputObjectSchema = Schema
