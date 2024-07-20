import { z } from "zod"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionCreateWithoutUserInputObjectSchema } from "./UserSubscriptionCreateWithoutUserInput.schema"
import { UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCreateOrConnectWithoutUserInput> = z
  .object({
    where: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserSubscriptionCreateWithoutUserInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionCreateOrConnectWithoutUserInputObjectSchema = Schema
