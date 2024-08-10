import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventCreateWithoutVehicleInputObjectSchema } from "./VehicleEventCreateWithoutVehicleInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventCreateOrConnectWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventCreateOrConnectWithoutVehicleInputObjectSchema = Schema
