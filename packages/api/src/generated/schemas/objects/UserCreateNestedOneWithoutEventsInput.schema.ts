import { z } from "zod"
import { UserCreateWithoutEventsInputObjectSchema } from "./UserCreateWithoutEventsInput.schema"
import { UserUncheckedCreateWithoutEventsInputObjectSchema } from "./UserUncheckedCreateWithoutEventsInput.schema"
import { UserCreateOrConnectWithoutEventsInputObjectSchema } from "./UserCreateOrConnectWithoutEventsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutEventsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutEventsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutEventsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutEventsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutEventsInputObjectSchema = Schema
