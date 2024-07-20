import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutVehicleInputObjectSchema = Schema
