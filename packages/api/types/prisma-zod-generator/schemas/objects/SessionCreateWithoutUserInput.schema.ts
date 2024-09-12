import { z } from "zod"
import { AccountCreateNestedOneWithoutSessionsInputObjectSchema } from "./AccountCreateNestedOneWithoutSessionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateWithoutUserInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expiresAt: z.coerce.date(),
    deviceFingerprint: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    account: z.lazy(() => AccountCreateNestedOneWithoutSessionsInputObjectSchema),
  })
  .strict()

export const SessionCreateWithoutUserInputObjectSchema = Schema
