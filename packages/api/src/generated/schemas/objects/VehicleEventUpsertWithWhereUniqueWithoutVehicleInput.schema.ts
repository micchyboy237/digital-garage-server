import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithoutVehicleInputObjectSchema } from "./VehicleEventUpdateWithoutVehicleInput.schema"
import { VehicleEventUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutVehicleInput.schema"
import { VehicleEventCreateWithoutVehicleInputObjectSchema } from "./VehicleEventCreateWithoutVehicleInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpsertWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleEventUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpsertWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
