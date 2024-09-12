import { z } from "zod"
import { SubscriptionCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateWithoutPaymentsInput.schema"
import { SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutPaymentsInput.schema"
import { SubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateOrConnectWithoutPaymentsInput.schema"
import { SubscriptionUpsertWithoutPaymentsInputObjectSchema } from "./SubscriptionUpsertWithoutPaymentsInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"
import { SubscriptionUpdateWithoutPaymentsInputObjectSchema } from "./SubscriptionUpdateWithoutPaymentsInput.schema"
import { SubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema } from "./SubscriptionUncheckedUpdateWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionUpdateOneWithoutPaymentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SubscriptionCreateWithoutPaymentsInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
    upsert: z.lazy(() => SubscriptionUpsertWithoutPaymentsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => SubscriptionUpdateWithoutPaymentsInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedUpdateWithoutPaymentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const SubscriptionUpdateOneWithoutPaymentsNestedInputObjectSchema = Schema
