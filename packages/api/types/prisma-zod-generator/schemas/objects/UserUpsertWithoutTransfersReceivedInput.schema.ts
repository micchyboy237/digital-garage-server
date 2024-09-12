import { z } from "zod"
import { UserUpdateWithoutTransfersReceivedInputObjectSchema } from "./UserUpdateWithoutTransfersReceivedInput.schema"
import { UserUncheckedUpdateWithoutTransfersReceivedInputObjectSchema } from "./UserUncheckedUpdateWithoutTransfersReceivedInput.schema"
import { UserCreateWithoutTransfersReceivedInputObjectSchema } from "./UserCreateWithoutTransfersReceivedInput.schema"
import { UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersReceivedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutTransfersReceivedInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutTransfersReceivedInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutTransfersReceivedInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutTransfersReceivedInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutTransfersReceivedInputObjectSchema = Schema
