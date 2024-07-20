import { z } from "zod"
import { UserUpdateWithoutDocumentsInputObjectSchema } from "./UserUpdateWithoutDocumentsInput.schema"
import { UserUncheckedUpdateWithoutDocumentsInputObjectSchema } from "./UserUncheckedUpdateWithoutDocumentsInput.schema"
import { UserCreateWithoutDocumentsInputObjectSchema } from "./UserCreateWithoutDocumentsInput.schema"
import { UserUncheckedCreateWithoutDocumentsInputObjectSchema } from "./UserUncheckedCreateWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutDocumentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutDocumentsInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutDocumentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutDocumentsInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutDocumentsInputObjectSchema = Schema
