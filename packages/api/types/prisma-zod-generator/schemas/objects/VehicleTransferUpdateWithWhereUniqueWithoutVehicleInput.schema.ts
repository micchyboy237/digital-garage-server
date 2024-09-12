import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferUpdateWithoutVehicleInputObjectSchema } from "./VehicleTransferUpdateWithoutVehicleInput.schema"
import { VehicleTransferUncheckedUpdateWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedUpdateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateWithWhereUniqueWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleTransferUpdateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedUpdateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferUpdateWithWhereUniqueWithoutVehicleInputObjectSchema = Schema
