import { z } from "zod"
import { AccountArgsObjectSchema } from "./AccountArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionSelect> = z
  .object({
    id: z.boolean().optional(),
    token: z.boolean().optional(),
    expiresAt: z.boolean().optional(),
    accountId: z.boolean().optional(),
    account: z.union([z.boolean(), z.lazy(() => AccountArgsObjectSchema)]).optional(),
    deviceFingerprint: z.boolean().optional(),
    userId: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
  })
  .strict()

export const SessionSelectObjectSchema = Schema
