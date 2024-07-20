import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutDocumentsInputObjectSchema } from "./UserCreateWithoutDocumentsInput.schema"
import { UserUncheckedCreateWithoutDocumentsInputObjectSchema } from "./UserUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutDocumentsInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutDocumentsInputObjectSchema = Schema
