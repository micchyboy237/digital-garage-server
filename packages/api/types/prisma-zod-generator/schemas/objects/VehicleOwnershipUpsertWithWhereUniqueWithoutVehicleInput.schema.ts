import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleInput.schema"
import { VehicleOwnershipCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
