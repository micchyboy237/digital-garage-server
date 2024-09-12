import { z } from "zod"
import { UserCreateWithoutDisplayPictureInputObjectSchema } from "./UserCreateWithoutDisplayPictureInput.schema"
import { UserUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./UserUncheckedCreateWithoutDisplayPictureInput.schema"
import { UserCreateOrConnectWithoutDisplayPictureInputObjectSchema } from "./UserCreateOrConnectWithoutDisplayPictureInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUncheckedCreateNestedOneWithoutDisplayPictureInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutDisplayPictureInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutDisplayPictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDisplayPictureInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserUncheckedCreateNestedOneWithoutDisplayPictureInputObjectSchema = Schema
