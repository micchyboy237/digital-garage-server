import { z } from "zod"
import { UserUpdateWithoutTransfersSentInputObjectSchema } from "./UserUpdateWithoutTransfersSentInput.schema"
import { UserUncheckedUpdateWithoutTransfersSentInputObjectSchema } from "./UserUncheckedUpdateWithoutTransfersSentInput.schema"
import { UserCreateWithoutTransfersSentInputObjectSchema } from "./UserCreateWithoutTransfersSentInput.schema"
import { UserUncheckedCreateWithoutTransfersSentInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersSentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutTransfersSentInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutTransfersSentInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutTransfersSentInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutTransfersSentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTransfersSentInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutTransfersSentInputObjectSchema = Schema
