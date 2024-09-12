import { z } from "zod"
import { UserUpdateWithoutSubscriptionInputObjectSchema } from "./UserUpdateWithoutSubscriptionInput.schema"
import { UserUncheckedUpdateWithoutSubscriptionInputObjectSchema } from "./UserUncheckedUpdateWithoutSubscriptionInput.schema"
import { UserCreateWithoutSubscriptionInputObjectSchema } from "./UserCreateWithoutSubscriptionInput.schema"
import { UserUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserUncheckedCreateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpsertWithoutSubscriptionInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserUpdateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => UserUncheckedUpdateWithoutSubscriptionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserCreateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const UserUpsertWithoutSubscriptionInputObjectSchema = Schema
