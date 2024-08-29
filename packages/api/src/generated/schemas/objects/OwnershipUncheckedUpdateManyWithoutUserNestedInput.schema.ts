import { z } from "zod"
import { OwnershipCreateWithoutUserInputObjectSchema } from "./OwnershipCreateWithoutUserInput.schema"
import { OwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./OwnershipUncheckedCreateWithoutUserInput.schema"
import { OwnershipCreateOrConnectWithoutUserInputObjectSchema } from "./OwnershipCreateOrConnectWithoutUserInput.schema"
import { OwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./OwnershipUpsertWithWhereUniqueWithoutUserInput.schema"
import { OwnershipCreateManyUserInputEnvelopeObjectSchema } from "./OwnershipCreateManyUserInputEnvelope.schema"
import { OwnershipWhereUniqueInputObjectSchema } from "./OwnershipWhereUniqueInput.schema"
import { OwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./OwnershipUpdateWithWhereUniqueWithoutUserInput.schema"
import { OwnershipUpdateManyWithWhereWithoutUserInputObjectSchema } from "./OwnershipUpdateManyWithWhereWithoutUserInput.schema"
import { OwnershipScalarWhereInputObjectSchema } from "./OwnershipScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.OwnershipUncheckedUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => OwnershipCreateWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => OwnershipUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => OwnershipCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => OwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => OwnershipCreateManyUserInputEnvelopeObjectSchema).optional(),
    set: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    disconnect: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    delete: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    connect: z
      .union([z.lazy(() => OwnershipWhereUniqueInputObjectSchema), z.lazy(() => OwnershipWhereUniqueInputObjectSchema).array()])
      .optional(),
    update: z
      .union([
        z.lazy(() => OwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => OwnershipUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => OwnershipUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([z.lazy(() => OwnershipScalarWhereInputObjectSchema), z.lazy(() => OwnershipScalarWhereInputObjectSchema).array()])
      .optional(),
  })
  .strict()

export const OwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
