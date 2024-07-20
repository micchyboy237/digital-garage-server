import { z } from "zod"
import { UserCreateWithoutDocumentsInputObjectSchema } from "./UserCreateWithoutDocumentsInput.schema"
import { UserUncheckedCreateWithoutDocumentsInputObjectSchema } from "./UserUncheckedCreateWithoutDocumentsInput.schema"
import { UserCreateOrConnectWithoutDocumentsInputObjectSchema } from "./UserCreateOrConnectWithoutDocumentsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutDocumentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutDocumentsInputObjectSchema = Schema
