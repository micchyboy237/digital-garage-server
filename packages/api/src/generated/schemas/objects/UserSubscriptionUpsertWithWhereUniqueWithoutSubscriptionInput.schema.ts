import { z } from "zod"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionUpdateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUpdateWithoutSubscriptionInput.schema"
import { UserSubscriptionUncheckedUpdateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUncheckedUpdateWithoutSubscriptionInput.schema"
import { UserSubscriptionCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionCreateWithoutSubscriptionInput.schema"
import { UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => UserSubscriptionUpdateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedUpdateWithoutSubscriptionInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserSubscriptionCreateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema = Schema
