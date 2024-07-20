import { z } from "zod"
import { UserSubscriptionUpdateWithoutUserInputObjectSchema } from "./UserSubscriptionUpdateWithoutUserInput.schema"
import { UserSubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedUpdateWithoutUserInput.schema"
import { UserSubscriptionCreateWithoutUserInputObjectSchema } from "./UserSubscriptionCreateWithoutUserInput.schema"
import { UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserSubscriptionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserSubscriptionCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionUpsertWithoutUserInputObjectSchema = Schema
