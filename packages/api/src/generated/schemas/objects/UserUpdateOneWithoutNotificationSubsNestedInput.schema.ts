import { z } from "zod"
import { UserCreateWithoutNotificationSubsInputObjectSchema } from "./UserCreateWithoutNotificationSubsInput.schema"
import { UserUncheckedCreateWithoutNotificationSubsInputObjectSchema } from "./UserUncheckedCreateWithoutNotificationSubsInput.schema"
import { UserCreateOrConnectWithoutNotificationSubsInputObjectSchema } from "./UserCreateOrConnectWithoutNotificationSubsInput.schema"
import { UserUpsertWithoutNotificationSubsInputObjectSchema } from "./UserUpsertWithoutNotificationSubsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutNotificationSubsInputObjectSchema } from "./UserUpdateWithoutNotificationSubsInput.schema"
import { UserUncheckedUpdateWithoutNotificationSubsInputObjectSchema } from "./UserUncheckedUpdateWithoutNotificationSubsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutNotificationSubsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutNotificationSubsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutNotificationSubsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationSubsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutNotificationSubsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutNotificationSubsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutNotificationSubsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutNotificationSubsNestedInputObjectSchema = Schema
