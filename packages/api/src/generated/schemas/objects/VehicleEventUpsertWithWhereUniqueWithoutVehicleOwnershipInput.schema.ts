import { z } from "zod"
import { VehicleEventWhereUniqueInputObjectSchema } from "./VehicleEventWhereUniqueInput.schema"
import { VehicleEventUpdateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUpdateWithoutVehicleOwnershipInput.schema"
import { VehicleEventUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUncheckedUpdateWithoutVehicleOwnershipInput.schema"
import { VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventCreateWithoutVehicleOwnershipInput.schema"
import { VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema } from "./VehicleEventUncheckedCreateWithoutVehicleOwnershipInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventUpsertWithWhereUniqueWithoutVehicleOwnershipInput> = z
  .object({
    where: z.lazy(() => VehicleEventWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleEventUpdateWithoutVehicleOwnershipInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedUpdateWithoutVehicleOwnershipInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleEventCreateWithoutVehicleOwnershipInputObjectSchema),
      z.lazy(() => VehicleEventUncheckedCreateWithoutVehicleOwnershipInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleEventUpsertWithWhereUniqueWithoutVehicleOwnershipInputObjectSchema = Schema
