import { z } from "zod"
import { UserCreateNestedOneWithoutSessionInputObjectSchema } from "./UserCreateNestedOneWithoutSessionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionCreateInput> = z
  .object({
    id: z.string().optional(),
    token: z.string(),
    createdAt: z.coerce.date().optional(),
    expiresAt: z.coerce.date(),
    user: z.lazy(() => UserCreateNestedOneWithoutSessionInputObjectSchema),
  })
  .strict()

export const SessionCreateInputObjectSchema = Schema
