import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { SessionFindManySchema } from "../findManySession.schema"
import { AccountCountOutputTypeArgsObjectSchema } from "./AccountCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountSelect> = z
  .object({
    id: z.boolean().optional(),
    provider: z.boolean().optional(),
    email: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    firebaseUid: z.boolean().optional(),
    isEmailVerified: z.boolean().optional(),
    lastLogin: z.boolean().optional(),
    sessions: z.union([z.boolean(), z.lazy(() => SessionFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => AccountCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const AccountSelectObjectSchema = Schema
