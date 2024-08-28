import { z } from "zod"
import { SubscriptionCreateWithoutUserInputObjectSchema } from "./SubscriptionCreateWithoutUserInput.schema"
import { SubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutUserInput.schema"
import { SubscriptionCreateOrConnectWithoutUserInputObjectSchema } from "./SubscriptionCreateOrConnectWithoutUserInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateNestedOneWithoutUserInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SubscriptionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutUserInputObjectSchema).optional(),
    connect: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionCreateNestedOneWithoutUserInputObjectSchema = Schema
