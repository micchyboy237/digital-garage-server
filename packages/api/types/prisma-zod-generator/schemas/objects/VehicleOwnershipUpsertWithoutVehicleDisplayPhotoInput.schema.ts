import { z } from "zod"
import { VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpsertWithoutVehicleDisplayPhotoInput> = z
  .object({
    update: z.union([
      z.lazy(() => VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
    ]),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpsertWithoutVehicleDisplayPhotoInputObjectSchema = Schema
