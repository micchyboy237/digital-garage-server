import { z } from "zod"
import { UserCreateWithoutNotificationSubsInputObjectSchema } from "./UserCreateWithoutNotificationSubsInput.schema"
import { UserUncheckedCreateWithoutNotificationSubsInputObjectSchema } from "./UserUncheckedCreateWithoutNotificationSubsInput.schema"
import { UserCreateOrConnectWithoutNotificationSubsInputObjectSchema } from "./UserCreateOrConnectWithoutNotificationSubsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutNotificationSubsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutNotificationSubsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutNotificationSubsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutNotificationSubsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutNotificationSubsInputObjectSchema = Schema
