import { z } from "zod"
import { UserSubscriptionCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionCreateWithoutSubscriptionInput.schema"
import { UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutSubscriptionInput.schema"
import { UserSubscriptionCreateOrConnectWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionCreateOrConnectWithoutSubscriptionInput.schema"
import { UserSubscriptionCreateManySubscriptionInputEnvelopeObjectSchema } from "./UserSubscriptionCreateManySubscriptionInputEnvelope.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUncheckedCreateNestedManyWithoutSubscriptionInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => UserSubscriptionCreateWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserSubscriptionCreateWithoutSubscriptionInputObjectSchema).array(),
        z.lazy(() => UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => UserSubscriptionCreateOrConnectWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserSubscriptionCreateOrConnectWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => UserSubscriptionCreateManySubscriptionInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const UserSubscriptionUncheckedCreateNestedManyWithoutSubscriptionInputObjectSchema = Schema
