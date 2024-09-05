import { z } from "zod"
import { AccountProviderUserIdCompoundUniqueInputObjectSchema } from "./AccountProviderUserIdCompoundUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    provider_userId: z.lazy(() => AccountProviderUserIdCompoundUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AccountWhereUniqueInputObjectSchema = Schema
