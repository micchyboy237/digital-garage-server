import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema = Schema
