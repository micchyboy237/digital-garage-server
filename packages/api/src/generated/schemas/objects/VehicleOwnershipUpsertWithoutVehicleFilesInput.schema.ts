import { z } from "zod"
import { VehicleOwnershipUpdateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutVehicleFilesInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutVehicleFilesInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleFilesInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutVehicleFilesInputObjectSchema = Schema
