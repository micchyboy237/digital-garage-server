import { z } from "zod"
import { UserCreateWithoutTransfersSentInputObjectSchema } from "./UserCreateWithoutTransfersSentInput.schema"
import { UserUncheckedCreateWithoutTransfersSentInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersSentInput.schema"
import { UserCreateOrConnectWithoutTransfersSentInputObjectSchema } from "./UserCreateOrConnectWithoutTransfersSentInput.schema"
import { UserUpsertWithoutTransfersSentInputObjectSchema } from "./UserUpsertWithoutTransfersSentInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutTransfersSentInputObjectSchema } from "./UserUpdateWithoutTransfersSentInput.schema"
import { UserUncheckedUpdateWithoutTransfersSentInputObjectSchema } from "./UserUncheckedUpdateWithoutTransfersSentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutTransfersSentNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTransfersSentInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTransfersSentInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTransfersSentInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutTransfersSentInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutTransfersSentInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTransfersSentInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutTransfersSentNestedInputObjectSchema = Schema
