import { z } from "zod"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./VehicleDetailsWhereUniqueInput.schema"
import { VehicleDetailsCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateWithoutVehicleInput.schema"
import { VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsCreateOrConnectWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleDetailsWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleDetailsCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDetailsCreateOrConnectWithoutVehicleInputObjectSchema = Schema
