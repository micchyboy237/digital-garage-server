import { z } from "zod"
import { UserSubscriptionScalarWhereInputObjectSchema } from "./UserSubscriptionScalarWhereInput.schema"
import { UserSubscriptionUpdateManyMutationInputObjectSchema } from "./UserSubscriptionUpdateManyMutationInput.schema"
import { UserSubscriptionUncheckedUpdateManyWithoutUserSubscriptionsInputObjectSchema } from "./UserSubscriptionUncheckedUpdateManyWithoutUserSubscriptionsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInput> = z
  .object({
    where: z.lazy(() => UserSubscriptionScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => UserSubscriptionUpdateManyMutationInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedUpdateManyWithoutUserSubscriptionsInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInputObjectSchema = Schema
