import { z } from "zod"
import { UserCreateWithoutSubscriptionInputObjectSchema } from "./UserCreateWithoutSubscriptionInput.schema"
import { UserUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserUncheckedCreateWithoutSubscriptionInput.schema"
import { UserCreateOrConnectWithoutSubscriptionInputObjectSchema } from "./UserCreateOrConnectWithoutSubscriptionInput.schema"
import { UserUpsertWithoutSubscriptionInputObjectSchema } from "./UserUpsertWithoutSubscriptionInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserUpdateWithoutSubscriptionInputObjectSchema } from "./UserUpdateWithoutSubscriptionInput.schema"
import { UserUncheckedUpdateWithoutSubscriptionInputObjectSchema } from "./UserUncheckedUpdateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserUpdateOneWithoutSubscriptionNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutSubscriptionInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
    upsert: z.lazy(() => UserUpsertWithoutSubscriptionInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserUpdateWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserUncheckedUpdateWithoutSubscriptionInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserUpdateOneWithoutSubscriptionNestedInputObjectSchema = Schema
