import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutOwnershipsInputObjectSchema } from "./UserCreateWithoutOwnershipsInput.schema"
import { UserUncheckedCreateWithoutOwnershipsInputObjectSchema } from "./UserUncheckedCreateWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutOwnershipsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutOwnershipsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutOwnershipsInputObjectSchema = Schema
