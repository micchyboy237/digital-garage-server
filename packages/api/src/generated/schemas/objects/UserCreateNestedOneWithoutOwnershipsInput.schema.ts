import { z } from "zod"
import { UserCreateWithoutOwnershipsInputObjectSchema } from "./UserCreateWithoutOwnershipsInput.schema"
import { UserUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutOwnershipsInput.schema"
import { UserCreateOrConnectWithoutOwnershipsInputObjectSchema } from "./UserCreateOrConnectWithoutOwnershipsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutOwnershipsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutOwnershipsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutOwnershipsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnershipsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutOwnershipsInputObjectSchema = Schema
