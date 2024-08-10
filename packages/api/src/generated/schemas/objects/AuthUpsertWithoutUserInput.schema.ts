import { z } from "zod"
import { AuthUpdateWithoutUserInputObjectSchema } from "./AuthUpdateWithoutUserInput.schema"
import { AuthUncheckedUpdateWithoutUserInputObjectSchema } from "./AuthUncheckedUpdateWithoutUserInput.schema"
import { AuthCreateWithoutUserInputObjectSchema } from "./AuthCreateWithoutUserInput.schema"
import { AuthUncheckedCreateWithoutUserInputObjectSchema } from "./AuthUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AuthUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => AuthUpdateWithoutUserInputObjectSchema),
      z.lazy(() => AuthUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AuthCreateWithoutUserInputObjectSchema),
      z.lazy(() => AuthUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const AuthUpsertWithoutUserInputObjectSchema = Schema
