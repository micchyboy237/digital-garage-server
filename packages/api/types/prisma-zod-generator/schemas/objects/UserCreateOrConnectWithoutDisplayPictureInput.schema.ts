import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutDisplayPictureInputObjectSchema } from "./UserCreateWithoutDisplayPictureInput.schema"
import { UserUncheckedCreateWithoutDisplayPictureInputObjectSchema } from "./UserUncheckedCreateWithoutDisplayPictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDisplayPictureInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDisplayPictureInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDisplayPictureInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutDisplayPictureInputObjectSchema = Schema
