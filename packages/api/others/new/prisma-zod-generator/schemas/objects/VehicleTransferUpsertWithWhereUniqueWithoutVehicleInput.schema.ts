import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithoutVehicleInputObjectSchema } from "./VehicleTransferUpdateWithoutVehicleInput.schema"
import { VehicleTransferUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedUpdateWithoutVehicleInput.schema"
import { VehicleTransferCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateWithoutVehicleInput.schema"
import { VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpsertWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    update: z.union([
      z.lazy(() => VehicleTransferUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleTransferCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpsertWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
