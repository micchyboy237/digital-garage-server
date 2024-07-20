import { z } from "zod"
import { UserSubscriptionCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionCreateWithoutPaymentsInput.schema"
import { UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutPaymentsInput.schema"
import { UserSubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema } from "./UserSubscriptionCreateOrConnectWithoutPaymentsInput.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionCreateNestedOneWithoutPaymentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserSubscriptionCreateWithoutPaymentsInputObjectSchema),
        z.lazy(() => UserSubscriptionUncheckedCreateWithoutPaymentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => UserSubscriptionCreateOrConnectWithoutPaymentsInputObjectSchema).optional(),
    connect: z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const UserSubscriptionCreateNestedOneWithoutPaymentsInputObjectSchema = Schema
