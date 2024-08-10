import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithoutVehicleInputObjectSchema } from "./VehicleEventUpdateWithoutVehicleInput.schema"
import { VehicleEventUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleEventUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpdateWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
