import { z } from "zod"
import { AccountProviderEmailCompoundUniqueInputObjectSchema } from "./AccountProviderEmailCompoundUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountWhereUniqueInput> = z
  .object({
    id: z.string().optional(),
    provider_email: z.lazy(() => AccountProviderEmailCompoundUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AccountWhereUniqueInputObjectSchema = Schema
