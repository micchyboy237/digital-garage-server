import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleInput.schema"
import { VehicleOwnershipCreateManyVehicleInputEnvelopeObjectSchema } from "./VehicleOwnershipCreateManyVehicleInputEnvelope.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedManyWithoutVehicleInput> = z
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
    createMany: z.lazy(() => VehicleOwnershipCreateManyVehicleInputEnvelopeObjectSchema).optional(),
    connect: z
      .union([
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
        z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).array(),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedManyWithoutVehicleInputObjectSchema = Schema
