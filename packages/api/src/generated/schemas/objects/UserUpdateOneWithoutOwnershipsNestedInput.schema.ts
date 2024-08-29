import { z } from "zod"
import { UserCreateWithoutOwnershipsInputObjectSchema } from "./UserCreateWithoutOwnershipsInput.schema"
import { UserUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutOwnershipsInput.schema"
import { UserCreateOrConnectWithoutOwnershipsInputObjectSchema } from "./UserCreateOrConnectWithoutOwnershipsInput.schema"
import { UserUpsertWithoutOwnershipsInputObjectSchema } from "./UserUpsertWithoutOwnershipsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutOwnershipsInputObjectSchema } from "./UserUpdateWithoutOwnershipsInput.schema"
import { UserUncheckedUpdateWithoutOwnershipsInputObjectSchema } from "./UserUncheckedUpdateWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutOwnershipsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutOwnershipsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutOwnershipsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutOwnershipsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutOwnershipsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutOwnershipsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutOwnershipsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutOwnershipsNestedInputObjectSchema = Schema
