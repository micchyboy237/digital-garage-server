import { z } from "zod"
import { VehicleOwnershipCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateWithoutUserInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutUserInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutUserInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutUserInput.schema"
import { VehicleOwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema } from "./VehicleOwnershipUpsertWithWhereUniqueWithoutUserInput.schema"
import { VehicleOwnershipCreateManyUserInputEnvelopeObjectSchema } from "./VehicleOwnershipCreateManyUserInputEnvelope.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema } from "./VehicleOwnershipUpdateWithWhereUniqueWithoutUserInput.schema"
import { VehicleOwnershipUpdateManyWithWhereWithoutUserInputObjectSchema } from "./VehicleOwnershipUpdateManyWithWhereWithoutUserInput.schema"
import { VehicleOwnershipScalarWhereInputObjectSchema } from "./VehicleOwnershipScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipCreateWithoutUserInputObjectSchema).array(),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleOwnershipCreateOrConnectWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipCreateOrConnectWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleOwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipUpsertWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleOwnershipCreateManyUserInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipUpdateWithWhereUniqueWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateManyWithWhereWithoutUserInputObjectSchema),
        z.lazy(() => VehicleOwnershipUpdateManyWithWhereWithoutUserInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema),
        z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedUpdateManyWithoutUserNestedInputObjectSchema = Schema
