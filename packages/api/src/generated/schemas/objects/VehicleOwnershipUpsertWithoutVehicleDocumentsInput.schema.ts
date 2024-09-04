import { z } from "zod"
import { VehicleOwnershipUpdateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutVehicleDocumentsInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutVehicleDocumentsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleDocumentsInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutVehicleDocumentsInputObjectSchema = Schema
