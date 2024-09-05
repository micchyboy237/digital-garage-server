import { z } from "zod"
import { UserUpdateWithoutDisplayPictureInputObjectSchema } from "./UserUpdateWithoutDisplayPictureInput.schema"
import { UserUncheckedUpdateWithoutDisplayPictureInputObjectSchema } from "./UserUncheckedUpdateWithoutDisplayPictureInput.schema"
import { UserCreateWithoutDisplayPictureInputObjectSchema } from "./UserCreateWithoutDisplayPictureInput.schema"
import { UserUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./UserUncheckedCreateWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutDisplayPictureInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDisplayPictureInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDisplayPictureInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDisplayPictureInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDisplayPictureInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutDisplayPictureInputObjectSchema = Schema
