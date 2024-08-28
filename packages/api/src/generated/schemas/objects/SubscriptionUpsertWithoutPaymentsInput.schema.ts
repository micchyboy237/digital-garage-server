import { z } from "zod"
import { SubscriptionUpdateWithoutPaymentsInputObjectSchema } from "./SubscriptionUpdateWithoutPaymentsInput.schema"
import { SubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema } from "./SubscriptionUncheckedUpdateWithoutPaymentsInput.schema"
import { SubscriptionCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateWithoutPaymentsInput.schema"
import { SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUpsertWithoutPaymentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => SubscriptionUpdateWithoutPaymentsInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => SubscriptionCreateWithoutPaymentsInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
    ]),
  })
  .strict()

export const SubscriptionUpsertWithoutPaymentsInputObjectSchema = Schema
