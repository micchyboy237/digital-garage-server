import { z } from "zod"
import { VehicleDetailsUpdateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUpdateWithoutVehicleInput.schema"
import { VehicleDetailsUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUncheckedUpdateWithoutVehicleInput.schema"
import { VehicleDetailsCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateWithoutVehicleInput.schema"
import { VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleDetailsUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsUpsertWithoutVehicleInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleDetailsUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleDetailsUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleDetailsCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleDetailsUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleDetailsUpsertWithoutVehicleInputObjectSchema = Schema
