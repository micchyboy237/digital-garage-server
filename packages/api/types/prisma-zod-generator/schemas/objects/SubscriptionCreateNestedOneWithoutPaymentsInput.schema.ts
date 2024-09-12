import { z } from "zod"
import { SubscriptionCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateWithoutPaymentsInput.schema"
import { SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutPaymentsInput.schema"
import { SubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateOrConnectWithoutPaymentsInput.schema"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateNestedOneWithoutPaymentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SubscriptionCreateWithoutPaymentsInputObjectSchema),
        z.lazy(() => SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => SubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
    connect: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const SubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema = Schema
