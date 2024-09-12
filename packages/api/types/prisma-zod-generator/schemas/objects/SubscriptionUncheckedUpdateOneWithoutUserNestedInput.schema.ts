import { z } from "zod"
import { SubscriptionCreateWithoutUserInputObjectSchema } from "./SubscriptionCreateWithoutUserInput.schema"
import { SubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutUserInput.schema"
import { SubscriptionCreateOrConnectWithoutUserInputObjectSchema } from "./SubscriptionCreateOrConnectWithoutUserInput.schema"
import { SubscriptionUpsertWithoutUserInputObjectSchema } from "./SubscriptionUpsertWithoutUserInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"
import { SubscriptionUpdateWithoutUserInputObjectSchema } from "./SubscriptionUpdateWithoutUserInput.schema"
import { SubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from "./SubscriptionUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUncheckedUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SubscriptionCreateWithoutUserInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutUserInputObjectSchema).optional(),
    upsert: z.lazy(() => SubscriptionUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => SubscriptionUpdateWithoutUserInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const SubscriptionUncheckedUpdateOneWithoutUserNestedInputObjectSchema = Schema
