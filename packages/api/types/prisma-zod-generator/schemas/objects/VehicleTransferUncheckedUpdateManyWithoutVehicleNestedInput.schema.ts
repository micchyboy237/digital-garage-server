import { z } from "zod"
import { VehicleTransferCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateWithoutVehicleInput.schema"
import { VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutVehicleInput.schema"
import { VehicleTransferCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateOrConnectWithoutVehicleInput.schema"
import { VehicleTransferUpsertWithWhereUniqueWithoutVehicleInputObjectSchema } from "./VehicleTransferUpsertWithWhereUniqueWithoutVehicleInput.schema"
import { VehicleTransferCreateManyVehicleInputEnvelopeObjectSchema } from "./VehicleTransferCreateManyVehicleInputEnvelope.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithWhereUniqueWithoutVehicleInputObjectSchema } from "./VehicleTransferUpdateWithWhereUniqueWithoutVehicleInput.schema"
import { VehicleTransferUpdateManyWithWhereWithoutVehicleInputObjectSchema } from "./VehicleTransferUpdateManyWithWhereWithoutVehicleInput.schema"
import { VehicleTransferScalarWhereInputObjectSchema } from "./VehicleTransferScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUncheckedUpdateManyWithoutVehicleNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleTransferCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleTransferCreateWithoutVehicleInputObjectSchema).array(),
        z.lazy(() => VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleTransferCreateOrConnectWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleTransferCreateOrConnectWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleTransferUpsertWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleTransferUpsertWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleTransferCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    set: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    disconnect: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    delete: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    connect: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
    update: z
      .union([
        z.lazy(() => VehicleTransferUpdateWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleTransferUpdateWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleTransferUpdateManyWithWhereWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleTransferUpdateManyWithWhereWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    deleteMany: z
      .union([
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema),
        z.lazy(() => VehicleTransferScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleTransferUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema = Schema
