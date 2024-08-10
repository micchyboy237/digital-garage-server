import { z } from "zod"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionUpdateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUpdateWithoutSubscriptionInput.schema"
import { UserSubscriptionUncheckedUpdateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUncheckedUpdateWithoutSubscriptionInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => UserSubscriptionUpdateWithoutSubscriptionInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedUpdateWithoutSubscriptionInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema = Schema
