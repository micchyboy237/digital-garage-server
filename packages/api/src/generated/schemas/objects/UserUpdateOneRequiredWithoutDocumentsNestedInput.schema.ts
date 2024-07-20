import { z } from "zod"
import { UserCreateWithoutDocumentsInputObjectSchema } from "./UserCreateWithoutDocumentsInput.schema"
import { UserUncheckedCreateWithoutDocumentsInputObjectSchema } from "./UserUncheckedCreateWithoutDocumentsInput.schema"
import { UserCreateOrConnectWithoutDocumentsInputObjectSchema } from "./UserCreateOrConnectWithoutDocumentsInput.schema"
import { UserUpsertWithoutDocumentsInputObjectSchema } from "./UserUpsertWithoutDocumentsInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutDocumentsInputObjectSchema } from "./UserUpdateWithoutDocumentsInput.schema"
import { UserUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./UserUncheckedUpdateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneRequiredWithoutDocumentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutDocumentsInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutDocumentsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutDocumentsInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutDocumentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneRequiredWithoutDocumentsNestedInputObjectSchema = Schema
