import { z } from "zod"
import { VehicleEventCreateWithoutVehicleInputObjectSchema } from "./VehicleEventCreateWithoutVehicleInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleInput.schema"
import { VehicleEventCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleEventCreateOrConnectWithoutVehicleInput.schema"
import { VehicleEventCreateManyVehicleInputEnvelopeObjectSchema } from "./VehicleEventCreateManyVehicleInputEnvelope.schema"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUncheckedCreateNestedManyWithoutVehicleInput> = z
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
    createMany: z.lazy(() => VehicleEventCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleEventWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleEventUncheckedCreateNestedManyWithoutVehicleInputObjectSchema = Schema
