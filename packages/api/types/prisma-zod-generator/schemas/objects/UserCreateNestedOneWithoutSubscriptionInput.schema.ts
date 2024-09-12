import { z } from "zod"
import { UserCreateWithoutSubscriptionInputObjectSchema } from "./UserCreateWithoutSubscriptionInput.schema"
import { UserUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserUncheckedCreateWithoutSubscriptionInput.schema"
import { UserCreateOrConnectWithoutSubscriptionInputObjectSchema } from "./UserCreateOrConnectWithoutSubscriptionInput.schema"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateNestedOneWithoutSubscriptionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserCreateWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserUncheckedCreateWithoutSubscriptionInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserCreateOrConnectWithoutSubscriptionInputObjectSchema).optional(),
    connect: z.lazy(() => UserWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserCreateNestedOneWithoutSubscriptionInputObjectSchema = Schema
