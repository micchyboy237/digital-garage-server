import { z } from "zod"
import { UserSubscriptionCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionCreateWithoutPaymentsInput.schema"
import { UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutPaymentsInput.schema"
import { UserSubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema } from "./UserSubscriptionCreateOrConnectWithoutPaymentsInput.schema"
import { UserSubscriptionUpsertWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUpsertWithoutPaymentsInput.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionUpdateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUpdateWithoutPaymentsInput.schema"
import { UserSubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUncheckedUpdateWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpdateOneRequiredWithoutPaymentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserSubscriptionCreateWithoutPaymentsInputObjectSchema),
        z.lazy(() => UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserSubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
    upsert: z.lazy(() => UserSubscriptionUpsertWithoutPaymentsInputObjectSchema).optional(),
    connect: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => UserSubscriptionUpdateWithoutPaymentsInputObjectSchema),
        z.lazy(() => UserSubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const UserSubscriptionUpdateOneRequiredWithoutPaymentsNestedInputObjectSchema = Schema
