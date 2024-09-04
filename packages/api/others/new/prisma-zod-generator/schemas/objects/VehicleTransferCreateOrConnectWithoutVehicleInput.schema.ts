import { z } from "zod"
import { VehicleTransferWhereUniqueInputObjectSchema } from "./VehicleTransferWhereUniqueInput.schema"
import { VehicleTransferCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateWithoutVehicleInput.schema"
import { VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferCreateOrConnectWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleTransferWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleTransferCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleTransferUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleTransferCreateOrConnectWithoutVehicleInputObjectSchema = Schema
