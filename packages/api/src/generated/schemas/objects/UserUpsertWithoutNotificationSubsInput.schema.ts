import { z } from "zod"
import { UserUpdateWithoutNotificationSubsInputObjectSchema } from "./UserUpdateWithoutNotificationSubsInput.schema"
import { UserUncheckedUpdateWithoutNotificationSubsInputObjectSchema } from "./UserUncheckedUpdateWithoutNotificationSubsInput.schema"
import { UserCreateWithoutNotificationSubsInputObjectSchema } from "./UserCreateWithoutNotificationSubsInput.schema"
import { UserUncheckedCreateWithoutNotificationSubsInputObjectSchema } from "./UserUncheckedCreateWithoutNotificationSubsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutNotificationSubsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutNotificationSubsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutNotificationSubsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutNotificationSubsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutNotificationSubsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutNotificationSubsInputObjectSchema = Schema
