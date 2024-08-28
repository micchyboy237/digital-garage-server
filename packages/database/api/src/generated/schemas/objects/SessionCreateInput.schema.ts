import { z } from "zod"
import { UserCreateNestedOneWithoutSessionsInputObjectSchema } from "./UserCreateNestedOneWithoutSessionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    expiresAt: z.coerce.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionsInputObjectSchema).optional(),
  })
  .strict()

export const SessionCreateInputObjectSchema = Schema
