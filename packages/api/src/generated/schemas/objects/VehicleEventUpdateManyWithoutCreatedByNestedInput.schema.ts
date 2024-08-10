import { z } from "zod"
import { VehicleEventCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateWithoutCreatedByInput.schema"
import { VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutCreatedByInput.schema"
import { VehicleEventCreateOrConnectWithoutCreatedByInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutCreatedByInput.schema"
import { VehicleEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./VehicleEventUpsertWithWhereUniqueWithoutCreatedByInput.schema"
import { VehicleEventCreateManyCreatedByInputEnvelopeObjectSchema } from "./VehicleEventCreateManyCreatedByInputEnvelope.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./VehicleEventUpdateWithWhereUniqueWithoutCreatedByInput.schema"
import { VehicleEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from "./VehicleEventUpdateManyWithWhereWithoutCreatedByInput.schema"
import { VehicleEventScalarWhereInputObjectSchema } from "./VehicleEventScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleEventCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleEventCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleEventCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehicleEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehicleEventUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VehicleEventScalarWhereInputObjectSchema),
        z.lazy(() => VehicleEventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleEventUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema
