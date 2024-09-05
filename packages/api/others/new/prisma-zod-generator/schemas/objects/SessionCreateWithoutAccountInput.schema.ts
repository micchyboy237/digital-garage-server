import { z } from "zod"
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from "./UserCreateNestedOneWithoutSessionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateWithoutAccountInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expiresAt: z.coerce.date(),
    deviceFingerprint: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema).optional(),
  })
  .strict()

export const SessionCreateWithoutAccountInputObjectSchema = Schema
