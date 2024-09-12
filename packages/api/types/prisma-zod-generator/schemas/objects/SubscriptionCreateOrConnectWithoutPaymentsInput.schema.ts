import { z } from "zod"
import { SubscriptionWhereUniqueInputObjectSchema } from "./SubscriptionWhereUniqueInput.schema"
import { SubscriptionCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionCreateWithoutPaymentsInput.schema"
import { SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./SubscriptionUncheckedCreateWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SubscriptionCreateOrConnectWithoutPaymentsInput> = z
  .object({
    where: z.lazy(() => SubscriptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => SubscriptionCreateWithoutPaymentsInputObjectSchema),
      z.lazy(() => SubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
    ]),
  })
  .strict()

export const SubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema = Schema
