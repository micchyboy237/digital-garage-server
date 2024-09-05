import { z } from "zod"
import { AccountUpdateWithoutSessionsInputObjectSchema } from "./AccountUpdateWithoutSessionsInput.schema"
import { AccountUncheckedUpdateWithoutSessionsInputObjectSchema } from "./AccountUncheckedUpdateWithoutSessionsInput.schema"
import { AccountCreateWithoutSessionsInputObjectSchema } from "./AccountCreateWithoutSessionsInput.schema"
import { AccountUncheckedCreateWithoutSessionsInputObjectSchema } from "./AccountUncheckedCreateWithoutSessionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountUpsertWithoutSessionsInput> = z
  .object({
    update: z.union([
      z.lazy(() => AccountUpdateWithoutSessionsInputObjectSchema),
      z.lazy(() => AccountUncheckedUpdateWithoutSessionsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => AccountCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict()

export const AccountUpsertWithoutSessionsInputObjectSchema = Schema
