import { z } from "zod"
import { UserSubscriptionCreateWithoutUserInputObjectSchema } from "./UserSubscriptionCreateWithoutUserInput.schema"
import { UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutUserInput.schema"
import { UserSubscriptionCreateOrConnectWithoutUserInputObjectSchema } from "./UserSubscriptionCreateOrConnectWithoutUserInput.schema"
import { UserSubscriptionUpsertWithoutUserInputObjectSchema } from "./UserSubscriptionUpsertWithoutUserInput.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionUpdateWithoutUserInputObjectSchema } from "./UserSubscriptionUpdateWithoutUserInput.schema"
import { UserSubscriptionUncheckedUpdateWithoutUserInputObjectSchema } from "./UserSubscriptionUncheckedUpdateWithoutUserInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpdateOneWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserSubscriptionCreateWithoutUserInputObjectSchema),
        z.lazy(() => UserSubscriptionUncheckedCreateWithoutUserInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserSubscriptionCreateOrConnectWithoutUserInputObjectSchema).optional(),
    upsert: z.lazy(() => UserSubscriptionUpsertWithoutUserInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserSubscriptionUpdateWithoutUserInputObjectSchema),
        z.lazy(() => UserSubscriptionUncheckedUpdateWithoutUserInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserSubscriptionUpdateOneWithoutUserNestedInputObjectSchema = Schema
