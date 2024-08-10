import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUpdateWithoutVehicleOwnershipInput.schema"
import { VehicleEventUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpdateWithWhereUniqueWithoutVehicleOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleEventUpdateWithoutVehicleOwnershipInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpdateWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema = Schema
