import { z } from "zod"
import { UserCreateWithoutDisplayPictureInputObjectSchema } from "./UserCreateWithoutDisplayPictureInput.schema"
import { UserUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./UserUncheckedCreateWithoutDisplayPictureInput.schema"
import { UserCreateOrConnectWithoutDisplayPictureInputObjectSchema } from "./UserCreateOrConnectWithoutDisplayPictureInput.schema"
import { UserUpsertWithoutDisplayPictureInputObjectSchema } from "./UserUpsertWithoutDisplayPictureInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutDisplayPictureInputObjectSchema } from "./UserUpdateWithoutDisplayPictureInput.schema"
import { UserUncheckedUpdateWithoutDisplayPictureInputObjectSchema } from "./UserUncheckedUpdateWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedUpdateOneWithoutDisplayPictureNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutDisplayPictureInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutDisplayPictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDisplayPictureInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutDisplayPictureInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutDisplayPictureInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutDisplayPictureInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUncheckedUpdateOneWithoutDisplayPictureNestedInputObjectSchema = Schema
