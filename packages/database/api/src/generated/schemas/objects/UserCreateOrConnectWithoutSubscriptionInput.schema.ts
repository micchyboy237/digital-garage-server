import { z } from "zod"
import { UserWhereUniqueInputObjectSchema } from "./UserWhereUniqueInput.schema"
import { UserCreateWithoutSubscriptionInputObjectSchema } from "./UserCreateWithoutSubscriptionInput.schema"
import { UserUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserUncheckedCreateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserCreateOrConnectWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => UserWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserCreateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => UserUncheckedCreateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const UserCreateOrConnectWithoutSubscriptionInputObjectSchema = Schema
