import { z } from "zod"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionCreateWithoutSubscriptionInput.schema"
import { UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCreateOrConnectWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserSubscriptionCreateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionCreateOrConnectWithoutSubscriptionInputObjectSchema = Schema
