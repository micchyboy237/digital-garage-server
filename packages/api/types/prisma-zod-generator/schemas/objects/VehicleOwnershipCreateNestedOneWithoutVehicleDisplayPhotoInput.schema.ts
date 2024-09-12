import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutVehicleDisplayPhotoInputObjectSchema = Schema
