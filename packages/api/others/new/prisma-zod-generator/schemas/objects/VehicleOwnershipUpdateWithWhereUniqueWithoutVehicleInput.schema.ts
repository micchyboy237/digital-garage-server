import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpdateWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
