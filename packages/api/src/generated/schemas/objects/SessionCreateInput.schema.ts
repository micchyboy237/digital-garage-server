import { z } from "zod"
import { AuthProviderSchema } from "../enums/AuthProvider.schema"
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from "./UserCreateNestedOneWithoutSessionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expiresAt: z.coerce.date(),
    provider: z.lazy(() => AuthProviderSchema),
    deviceFingerprint: z.string(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema).optional(),
  })
  .strict()

export const SessionCreateInputObjectSchema = Schema
