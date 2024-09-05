import { z } from "zod"
import { AccountWhereUniqueInputObjectSchema } from "./AccountWhereUniqueInput.schema"
import { AccountCreateWithoutSessionsInputObjectSchema } from "./AccountCreateWithoutSessionsInput.schema"
import { AccountUncheckedCreateWithoutSessionsInputObjectSchema } from "./AccountUncheckedCreateWithoutSessionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCreateOrConnectWithoutSessionsInput> = z
  .object({
    where: z.lazy(() => AccountWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => AccountCreateWithoutSessionsInputObjectSchema),
      z.lazy(() => AccountUncheckedCreateWithoutSessionsInputObjectSchema),
    ]),
  })
  .strict()

export const AccountCreateOrConnectWithoutSessionsInputObjectSchema = Schema
