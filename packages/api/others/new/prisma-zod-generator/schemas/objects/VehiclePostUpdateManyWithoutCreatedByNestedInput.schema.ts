import { z } from "zod"
import { VehiclePostCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateWithoutCreatedByInput.schema"
import { VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema } from "./VehiclePostUncheckedCreateWithoutCreatedByInput.schema"
import { VehiclePostCreateOrConnectWithoutCreatedByInputObjectSchema } from "./VehiclePostCreateOrConnectWithoutCreatedByInput.schema"
import { VehiclePostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./VehiclePostUpsertWithWhereUniqueWithoutCreatedByInput.schema"
import { VehiclePostCreateManyCreatedByInputEnvelopeObjectSchema } from "./VehiclePostCreateManyCreatedByInputEnvelope.schema"
import { VehiclePostWhereUniqueInputObjectSchema } from "./VehiclePostWhereUniqueInput.schema"
import { VehiclePostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema } from "./VehiclePostUpdateWithWhereUniqueWithoutCreatedByInput.schema"
import { VehiclePostUpdateManyWithWhereWithoutCreatedByInputObjectSchema } from "./VehiclePostUpdateManyWithWhereWithoutCreatedByInput.schema"
import { VehiclePostScalarWhereInputObjectSchema } from "./VehiclePostScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostUpdateManyWithoutCreatedByNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehiclePostCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostCreateWithoutCreatedByInputObjectSchema).array(),
        z.lazy(() => VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostUncheckedCreateWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehiclePostCreateOrConnectWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostCreateOrConnectWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehiclePostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostUpsertWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehiclePostCreateManyCreatedByInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema),
        z.lazy(() => VehiclePostWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehiclePostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostUpdateWithWhereUniqueWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehiclePostUpdateManyWithWhereWithoutCreatedByInputObjectSchema),
        z.lazy(() => VehiclePostUpdateManyWithWhereWithoutCreatedByInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema),
        z.lazy(() => VehiclePostScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehiclePostUpdateManyWithoutCreatedByNestedInputObjectSchema = Schema
