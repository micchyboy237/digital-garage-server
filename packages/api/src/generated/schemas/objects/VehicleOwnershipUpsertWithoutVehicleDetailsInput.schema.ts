import { z } from "zod"
import { VehicleOwnershipUpdateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutVehicleDetailsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutVehicleDetailsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleDetailsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutVehicleDetailsInputObjectSchema = Schema
