import { z } from "zod"
import { UserCreateWithoutEventsInputObjectSchema } from "./UserCreateWithoutEventsInput.schema"
import { UserUncheckedCreateWithoutEventsInputObjectSchema } from "./UserUncheckedCreateWithoutEventsInput.schema"
import { UserCreateOrConnectWithoutEventsInputObjectSchema } from "./UserCreateOrConnectWithoutEventsInput.schema"
import { UserUpsertWithoutEventsInputObjectSchema } from "./UserUpsertWithoutEventsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutEventsInputObjectSchema } from "./UserUpdateWithoutEventsInput.schema"
import { UserUncheckedUpdateWithoutEventsInputObjectSchema } from "./UserUncheckedUpdateWithoutEventsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutEventsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutEventsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutEventsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutEventsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutEventsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutEventsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutEventsNestedInputObjectSchema = Schema
