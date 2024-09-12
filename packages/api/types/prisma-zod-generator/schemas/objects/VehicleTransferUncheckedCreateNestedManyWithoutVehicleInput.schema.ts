import { z } from "zod"
import { VehicleTransferCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateWithoutVehicleInput.schema"
import { VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutVehicleInput.schema"
import { VehicleTransferCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateOrConnectWithoutVehicleInput.schema"
import { VehicleTransferCreateManyVehicleInputEnvelopeObjectSchema } from "./VehicleTransferCreateManyVehicleInputEnvelope.schema"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUncheckedCreateNestedManyWithoutVehicleInput> = z
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
    createMany: z.lazy(() => VehicleTransferCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleTransferUncheckedCreateNestedManyWithoutVehicleInputObjectSchema = Schema
