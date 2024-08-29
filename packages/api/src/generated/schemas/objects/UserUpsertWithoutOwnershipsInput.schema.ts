import { z } from "zod"
import { UserUpdateWithoutOwnershipsInputObjectSchema } from "./UserUpdateWithoutOwnershipsInput.schema"
import { UserUncheckedUpdateWithoutOwnershipsInputObjectSchema } from "./UserUncheckedUpdateWithoutOwnershipsInput.schema"
import { UserCreateWithoutOwnershipsInputObjectSchema } from "./UserCreateWithoutOwnershipsInput.schema"
import { UserUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutOwnershipsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutOwnershipsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutOwnershipsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutOwnershipsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutOwnershipsInputObjectSchema = Schema
