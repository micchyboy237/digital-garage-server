import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { AccountStatusSchema } from "../enums/AccountStatus.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateManyInput> = z
  .object({
    id: z.string().optional(),
    email: z.string(),
    password: z.string().optional().nullable(),
    firebaseUid: z.string(),
    provider: z.lazy(() => AuthProviderSchema),
    accountStatus: z.lazy(() => AccountStatusSchema).optional(),
  })
  .strict()

export const UserCreateManyInputObjectSchema = Schema
