import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInputObjectSchema = Schema
