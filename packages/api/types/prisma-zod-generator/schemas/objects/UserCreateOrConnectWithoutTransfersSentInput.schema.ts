import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutTransfersSentInputObjectSchema } from "./UserCreateWithoutTransfersSentInput.schema"
import { UserUncheckedCreateWithoutTransfersSentInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersSentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutTransfersSentInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutTransfersSentInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTransfersSentInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutTransfersSentInputObjectSchema = Schema
