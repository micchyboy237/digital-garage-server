import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutNotificationSubsInputObjectSchema } from "./UserCreateWithoutNotificationSubsInput.schema"
import { UserUncheckedCreateWithoutNotificationSubsInputObjectSchema } from "./UserUncheckedCreateWithoutNotificationSubsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutNotificationSubsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutNotificationSubsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutNotificationSubsInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutNotificationSubsInputObjectSchema = Schema
