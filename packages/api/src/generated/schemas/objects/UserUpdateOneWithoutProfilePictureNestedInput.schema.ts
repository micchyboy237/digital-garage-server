import { z } from "zod"
import { UserCreateWithoutProfilePictureInputObjectSchema } from "./UserCreateWithoutProfilePictureInput.schema"
import { UserUncheckedCreateWithoutProfilePictureInputObjectSchema } from "./UserUncheckedCreateWithoutProfilePictureInput.schema"
import { UserCreateOrConnectWithoutProfilePictureInputObjectSchema } from "./UserCreateOrConnectWithoutProfilePictureInput.schema"
import { UserUpsertWithoutProfilePictureInputObjectSchema } from "./UserUpsertWithoutProfilePictureInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutProfilePictureInputObjectSchema } from "./UserUpdateWithoutProfilePictureInput.schema"
import { UserUncheckedUpdateWithoutProfilePictureInputObjectSchema } from "./UserUncheckedUpdateWithoutProfilePictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutProfilePictureNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProfilePictureInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutProfilePictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfilePictureInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutProfilePictureInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutProfilePictureInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutProfilePictureInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutProfilePictureNestedInputObjectSchema = Schema
