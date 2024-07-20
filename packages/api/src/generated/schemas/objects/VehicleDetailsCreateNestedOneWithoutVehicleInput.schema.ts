import { z } from "zod"
import { VehicleDetailsCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateWithoutVehicleInput.schema"
import { VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutVehicleInput.schema"
import { VehicleDetailsCreateOrConnectWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateOrConnectWithoutVehicleInput.schema"
import { VehicleDetailsWhereUniqueInputObjectSchema } from "./VehicleDetailsWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsCreateNestedOneWithoutVehicleInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleDetailsCreateWithoutVehicleInputObjectSchema),
        z.lazy(() => VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleDetailsCreateOrConnectWithoutVehicleInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleDetailsWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema = Schema
