import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutTransfersReceivedInputObjectSchema } from "./UserCreateWithoutTransfersReceivedInput.schema"
import { UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersReceivedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutTransfersReceivedInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutTransfersReceivedInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutTransfersReceivedInputObjectSchema = Schema
