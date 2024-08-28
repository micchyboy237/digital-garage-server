import { z } from "zod"
import { SubscriptionUpdateWithoutUserInputObjectSchema } from "./SubscriptionUpdateWithoutUserInput.schema"
import { SubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from "./SubscriptionUncheckedUpdateWithoutUserInput.schema"
import { SubscriptionCreateWithoutUserInputObjectSchema } from "./SubscriptionCreateWithoutUserInput.schema"
import { SubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUpsertWithoutUserInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriptionUpdateWithoutUserInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedUpdateWithoutUserInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SubscriptionCreateWithoutUserInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputObjectSchema),
    ]),
  })
  .strict()

export const SubscriptionUpsertWithoutUserInputObjectSchema = Schema
