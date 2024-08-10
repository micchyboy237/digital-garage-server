import { z } from "zod"
import { UserCreateWithoutProfilePictureInputObjectSchema } from "./UserCreateWithoutProfilePictureInput.schema"
import { UserUncheckedCreateWithoutProfilePictureInputObjectSchema } from "./UserUncheckedCreateWithoutProfilePictureInput.schema"
import { UserCreateOrConnectWithoutProfilePictureInputObjectSchema } from "./UserCreateOrConnectWithoutProfilePictureInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutProfilePictureInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutProfilePictureInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutProfilePictureInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutProfilePictureInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutProfilePictureInputObjectSchema = Schema
