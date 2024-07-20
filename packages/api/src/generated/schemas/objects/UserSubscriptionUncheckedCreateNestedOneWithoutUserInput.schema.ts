import { z } from "zod"
import { UserSubscriptionCreateWithoutUserInputObjectSchema } from "./UserSubscriptionCreateWithoutUserInput.schema"
import { UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutUserInput.schema"
import { UserSubscriptionCreateOrConnectWithoutUserInputObjectSchema } from "./UserSubscriptionCreateOrConnectWithoutUserInput.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUncheckedCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserSubscriptionCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserSubscriptionCreateOrConnectWithoutUserInputObjectSchema).optional(),
    connect: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionUncheckedCreateNestedOneWithoutUserInputObjectSchema = Schema
