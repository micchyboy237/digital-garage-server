import { z } from "zod"
import { VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateWithoutVehicleOwnershipInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleOwnershipInput.schema"
import { VehicleEventCreateOrConnectWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutVehicleOwnershipInput.schema"
import { VehicleEventCreateManyVehicleOwnershipInputEnvelopeObjectSchema } from "./VehicleEventCreateManyVehicleOwnershipInputEnvelope.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUncheckedCreateNestedManyWithoutVehicleOwnershipInput> = z
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
    createMany: z.lazy(() => VehicleEventCreateManyVehicleOwnershipInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleEventUncheckedCreateNestedManyWithoutVehicleOwnershipInputObjectSchema = Schema
