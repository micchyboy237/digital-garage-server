import { z } from "zod"
import { UserCreateWithoutTransfersReceivedInputObjectSchema } from "./UserCreateWithoutTransfersReceivedInput.schema"
import { UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersReceivedInput.schema"
import { UserCreateOrConnectWithoutTransfersReceivedInputObjectSchema } from "./UserCreateOrConnectWithoutTransfersReceivedInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutTransfersReceivedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTransfersReceivedInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTransfersReceivedInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutTransfersReceivedInputObjectSchema = Schema
