import { z } from "zod"
import { SessionCreateWithoutAccountInputObjectSchema } from "./SessionCreateWithoutAccountInput.schema"
import { SessionUncheckedCreateWithoutAccountInputObjectSchema } from "./SessionUncheckedCreateWithoutAccountInput.schema"
import { SessionCreateOrConnectWithoutAccountInputObjectSchema } from "./SessionCreateOrConnectWithoutAccountInput.schema"
import { SessionUpsertWithWhereUniqueWithoutAccountInputObjectSchema } from "./SessionUpsertWithWhereUniqueWithoutAccountInput.schema"
import { SessionCreateManyAccountInputEnvelopeObjectSchema } from "./SessionCreateManyAccountInputEnvelope.schema"
import { SessionWhereUniqueInputObjectSchema } from "./SessionWhereUniqueInput.schema"
import { SessionUpdateWithWhereUniqueWithoutAccountInputObjectSchema } from "./SessionUpdateWithWhereUniqueWithoutAccountInput.schema"
import { SessionUpdateManyWithWhereWithoutAccountInputObjectSchema } from "./SessionUpdateManyWithWhereWithoutAccountInput.schema"
import { SessionScalarWhereInputObjectSchema } from "./SessionScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.SessionUncheckedUpdateManyWithoutAccountNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => SessionCreateWithoutAccountInputObjectSchema),
        z.lazy(() => SessionCreateWithoutAccountInputObjectSchema).array(),
        z.lazy(() => SessionUncheckedCreateWithoutAccountInputObjectSchema),
        z.lazy(() => SessionUncheckedCreateWithoutAccountInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => SessionCreateOrConnectWithoutAccountInputObjectSchema),
        z.lazy(() => SessionCreateOrConnectWithoutAccountInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutAccountInputObjectSchema),
        z.lazy(() => SessionUpsertWithWhereUniqueWithoutAccountInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => SessionCreateManyAccountInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => SessionWhereUniqueInputObjectSchema), z.lazy(() => SessionWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutAccountInputObjectSchema),
        z.lazy(() => SessionUpdateWithWhereUniqueWithoutAccountInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => SessionUpdateManyWithWhereWithoutAccountInputObjectSchema),
        z.lazy(() => SessionUpdateManyWithWhereWithoutAccountInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => SessionScalarWhereInputObjectSchema), z.lazy(() => SessionScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const SessionUncheckedUpdateManyWithoutAccountNestedInputObjectSchema = Schema
