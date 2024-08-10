import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateWithoutVehicleOwnershipInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateOrConnectWithoutVehicleOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventCreateOrConnectWithoutVehicleOwnershipInputObjectSchema = Schema
