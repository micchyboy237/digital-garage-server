import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleInput.schema"
import { VehicleOwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUpsertWithWhereUniqueWithoutVehicleInput.schema"
import { VehicleOwnershipCreateManyVehicleInputEnvelopeObjectSchema } from "./VehicleOwnershipCreateManyVehicleInputEnvelope.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUpdateWithWhereUniqueWithoutVehicleInput.schema"
import { VehicleOwnershipUpdateManyWithWhereWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUpdateManyWithWhereWithoutVehicleInput.schema"
import { VehicleOwnershipScalarWhereInputObjectSchema } from "./VehicleOwnershipScalarWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedUpdateManyWithoutVehicleNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleInputObjectSchema).array(),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    connectOrCreate: z
      .union([
        z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    upsert: z
      .union([
        z.lazy(() => VehicleOwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleOwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    createMany: z.lazy(() => VehicleOwnershipCreateManyVehicleInputEnvelopeObjectSchema).optional(),
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
        z.lazy(() => VehicleOwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleOwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema).array(),
      ])
      .optional(),
    updateMany: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateManyWithWhereWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleOwnershipUpdateManyWithWhereWithoutVehicleInputObjectSchema).array(),
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

export const VehicleOwnershipUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema = Schema
