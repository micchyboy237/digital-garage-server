import { z } from "zod"
import { UserCreateWithoutTransfersReceivedInputObjectSchema } from "./UserCreateWithoutTransfersReceivedInput.schema"
import { UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema } from "./UserUncheckedCreateWithoutTransfersReceivedInput.schema"
import { UserCreateOrConnectWithoutTransfersReceivedInputObjectSchema } from "./UserCreateOrConnectWithoutTransfersReceivedInput.schema"
import { UserUpsertWithoutTransfersReceivedInputObjectSchema } from "./UserUpsertWithoutTransfersReceivedInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutTransfersReceivedInputObjectSchema } from "./UserUpdateWithoutTransfersReceivedInput.schema"
import { UserUncheckedUpdateWithoutTransfersReceivedInputObjectSchema } from "./UserUncheckedUpdateWithoutTransfersReceivedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutTransfersReceivedNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutTransfersReceivedInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutTransfersReceivedInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutTransfersReceivedInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutTransfersReceivedInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutTransfersReceivedInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutTransfersReceivedInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutTransfersReceivedNestedInputObjectSchema = Schema
