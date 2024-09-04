import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutVehiclePhotosInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutVehiclePhotosInputObjectSchema = Schema
