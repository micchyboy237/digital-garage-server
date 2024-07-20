import { z } from "zod"
import { SessionUpdateWithoutUserInputObjectSchema } from "./SessionUpdateWithoutUserInput.schema"
import { SessionUncheckedUpdateWithoutUserInputObjectSchema } from "./SessionUncheckedUpdateWithoutUserInput.schema"
import { SessionCreateWithoutUserInputObjectSchema } from "./SessionCreateWithoutUserInput.schema"
import { SessionUncheckedCreateWithoutUserInputObjectSchema } from "./SessionUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => SessionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SessionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SessionCreateWithoutUserInputObjectSchema),
      z.lazy(() => SessionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const SessionUpsertWithoutUserInputObjectSchema = Schema
