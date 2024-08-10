import { z } from "zod"
import { VehicleEventCreateWithoutVehicleInputObjectSchema } from "./VehicleEventCreateWithoutVehicleInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleInput.schema"
import { VehicleEventCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutVehicleInput.schema"
import { VehicleEventUpsertWithWhereUniqueWithoutVehicleInputObjectSchema } from "./VehicleEventUpsertWithWhereUniqueWithoutVehicleInput.schema"
import { VehicleEventCreateManyVehicleInputEnvelopeObjectSchema } from "./VehicleEventCreateManyVehicleInputEnvelope.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithWhereUniqueWithoutVehicleInputObjectSchema } from "./VehicleEventUpdateWithWhereUniqueWithoutVehicleInput.schema"
import { VehicleEventUpdateManyWithWhereWithoutVehicleInputObjectSchema } from "./VehicleEventUpdateManyWithWhereWithoutVehicleInput.schema"
import { VehicleEventScalarWhereInputObjectSchema } from "./VehicleEventScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUncheckedUpdateManyWithoutVehicleNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleEventCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleEventCreateWithoutVehicleInputObjectSchema).array(),
        z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleEventCreateOrConnectWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleEventCreateOrConnectWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleEventUpsertWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleEventUpsertWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleEventCreateManyVehicleInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => VehicleEventUpdateWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleEventUpdateWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleEventUpdateManyWithWhereWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleEventUpdateManyWithWhereWithoutVehicleInputObjectSchema).array(),
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

export const VehicleEventUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema = Schema
