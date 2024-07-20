import { z } from "zod"
import { UserSubscriptionUpdateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUpdateWithoutPaymentsInput.schema"
import { UserSubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUncheckedUpdateWithoutPaymentsInput.schema"
import { UserSubscriptionCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionCreateWithoutPaymentsInput.schema"
import { UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUpsertWithoutPaymentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => UserSubscriptionUpdateWithoutPaymentsInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => UserSubscriptionCreateWithoutPaymentsInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionUpsertWithoutPaymentsInputObjectSchema = Schema
