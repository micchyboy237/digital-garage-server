import { z } from "zod"
import { AccountCreateWithoutSessionsInputObjectSchema } from "./AccountCreateWithoutSessionsInput.schema"
import { AccountUncheckedCreateWithoutSessionsInputObjectSchema } from "./AccountUncheckedCreateWithoutSessionsInput.schema"
import { AccountCreateOrConnectWithoutSessionsInputObjectSchema } from "./AccountCreateOrConnectWithoutSessionsInput.schema"
import { AccountUpsertWithoutSessionsInputObjectSchema } from "./AccountUpsertWithoutSessionsInput.schema"
import { AccountWhereUniqueInputObjectSchema } from "./AccountWhereUniqueInput.schema"
import { AccountUpdateWithoutSessionsInputObjectSchema } from "./AccountUpdateWithoutSessionsInput.schema"
import { AccountUncheckedUpdateWithoutSessionsInputObjectSchema } from "./AccountUncheckedUpdateWithoutSessionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.AccountUpdateOneRequiredWithoutSessionsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => AccountCreateWithoutSessionsInputObjectSchema),
        z.lazy(() => AccountUncheckedCreateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => AccountCreateOrConnectWithoutSessionsInputObjectSchema).optional(),
    upsert: z.lazy(() => AccountUpsertWithoutSessionsInputObjectSchema).optional(),
    connect: z.lazy(() => AccountWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => AccountUpdateWithoutSessionsInputObjectSchema),
        z.lazy(() => AccountUncheckedUpdateWithoutSessionsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const AccountUpdateOneRequiredWithoutSessionsNestedInputObjectSchema = Schema
