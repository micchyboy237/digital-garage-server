import { z } from "zod"
import { AccountCreateWithoutSessionsInputObjectSchema } from "./AccountCreateWithoutSessionsInput.schema"
import { AccountUncheckedCreateWithoutSessionsInputObjectSchema } from "./AccountUncheckedCreateWithoutSessionsInput.schema"
import { AccountCreateOrConnectWithoutSessionsInputObjectSchema } from "./AccountCreateOrConnectWithoutSessionsInput.schema"
import { AccountWhereUniqueInputObjectSchema } from "./AccountWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountCreateNestedOneWithoutSessionsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const AccountCreateNestedOneWithoutSessionsInputObjectSchema = Schema
