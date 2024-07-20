import { z } from "zod"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionCreateWithoutPaymentsInput.schema"
import { UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutPaymentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCreateOrConnectWithoutPaymentsInput> = z
  .object({
    where: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => UserSubscriptionCreateWithoutPaymentsInputObjectSchema),
      z.lazy(() => UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
    ]),
  })
  .strict()

export const UserSubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema = Schema
