import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutProfilePictureInputObjectSchema } from "./UserCreateWithoutProfilePictureInput.schema"
import { UserUncheckedCreateWithoutProfilePictureInputObjectSchema } from "./UserUncheckedCreateWithoutProfilePictureInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutProfilePictureInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutProfilePictureInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutProfilePictureInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutProfilePictureInputObjectSchema = Schema
