import { z } from "zod"
import { UserUpdateWithoutProfilePictureInputObjectSchema } from "./UserUpdateWithoutProfilePictureInput.schema"
import { UserUncheckedUpdateWithoutProfilePictureInputObjectSchema } from "./UserUncheckedUpdateWithoutProfilePictureInput.schema"
import { UserCreateWithoutProfilePictureInputObjectSchema } from "./UserCreateWithoutProfilePictureInput.schema"
import { UserUncheckedCreateWithoutProfilePictureInputObjectSchema } from "./UserUncheckedCreateWithoutProfilePictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutProfilePictureInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutProfilePictureInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutProfilePictureInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutProfilePictureInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProfilePictureInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutProfilePictureInputObjectSchema = Schema
