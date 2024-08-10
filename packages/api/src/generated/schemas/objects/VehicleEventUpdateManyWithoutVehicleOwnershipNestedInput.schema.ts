import { z } from "zod"
import { VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateWithoutVehicleOwnershipInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleOwnershipInput.schema"
import { VehicleEventCreateOrConnectWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutVehicleOwnershipInput.schema"
import { VehicleEventUpsertWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUpsertWithWhereUniqueWithoutVehicleOwnershipInput.schema"
import { VehicleEventCreateManyVehicleOwnershipInputEnvelopeObjectSchema } from "./VehicleEventCreateManyVehicleOwnershipInputEnvelope.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUpdateWithWhereUniqueWithoutVehicleOwnershipInput.schema"
import { VehicleEventUpdateManyWithWhereWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUpdateManyWithWhereWithoutVehicleOwnershipInput.schema"
import { VehicleEventScalarWhereInputObjectSchema } from "./VehicleEventScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateManyWithoutVehicleOwnershipNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema).array(),
        z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleEventCreateOrConnectWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => VehicleEventCreateOrConnectWithoutVehicleOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleEventUpsertWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => VehicleEventUpsertWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleEventCreateManyVehicleOwnershipInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => VehicleEventUpdateWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => VehicleEventUpdateWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleEventUpdateManyWithWhereWithoutVehicleOwnershipInputObjectSchema),
        z.lazy(() => VehicleEventUpdateManyWithWhereWithoutVehicleOwnershipInputObjectSchema).array(),
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

export const VehicleEventUpdateManyWithoutVehicleOwnershipNestedInputObjectSchema = Schema
