import { z } from "zod"
import { UserCreateWithoutTransfersSentInputObjectSchema } from "./UserCreateWithoutTransfersSentInput.schema"
import { UserUncheckedCreateWithoutTransfersSentInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersSentInput.schema"
import { UserCreateOrConnectWithoutTransfersSentInputObjectSchema } from "./UserCreateOrConnectWithoutTransfersSentInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTransfersSentInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTransfersSentInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTransfersSentInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTransfersSentInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutTransfersSentInputObjectSchema = Schema
