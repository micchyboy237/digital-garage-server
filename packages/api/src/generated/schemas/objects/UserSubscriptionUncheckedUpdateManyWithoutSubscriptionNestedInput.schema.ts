import { z } from "zod"
import { UserSubscriptionCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionCreateWithoutSubscriptionInput.schema"
import { UserSubscriptionUncheckedCreateWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUncheckedCreateWithoutSubscriptionInput.schema"
import { UserSubscriptionCreateOrConnectWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionCreateOrConnectWithoutSubscriptionInput.schema"
import { UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInput.schema"
import { UserSubscriptionCreateManySubscriptionInputEnvelopeObjectSchema } from "./UserSubscriptionCreateManySubscriptionInputEnvelope.schema"
import { UserSubscriptionWhereUniqueInputObjectSchema } from "./UserSubscriptionWhereUniqueInput.schema"
import { UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInput.schema"
import { UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInputObjectSchema } from "./UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInput.schema"
import { UserSubscriptionScalarWhereInputObjectSchema } from "./UserSubscriptionScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.UserSubscriptionUncheckedUpdateManyWithoutSubscriptionNestedInput> = z
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
    upsert: z
      .union([
        z.lazy(() => UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserSubscriptionUpsertWithWhereUniqueWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => UserSubscriptionCreateManySubscriptionInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema),
        z.lazy(() => UserSubscriptionWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserSubscriptionUpdateWithWhereUniqueWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInputObjectSchema),
        z.lazy(() => UserSubscriptionUpdateManyWithWhereWithoutSubscriptionInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => UserSubscriptionScalarWhereInputObjectSchema),
        z.lazy(() => UserSubscriptionScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const UserSubscriptionUncheckedUpdateManyWithoutSubscriptionNestedInputObjectSchema = Schema
