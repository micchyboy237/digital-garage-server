import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInputObjectSchema = Schema
