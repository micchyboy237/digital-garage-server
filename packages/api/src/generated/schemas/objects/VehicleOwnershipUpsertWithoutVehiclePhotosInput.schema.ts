import { z } from "zod"
import { VehicleOwnershipUpdateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutVehiclePhotosInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutVehiclePhotosInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehiclePhotosInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutVehiclePhotosInputObjectSchema = Schema
