import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipUpsertWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUpsertWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehiclePhotosInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehiclePhotosInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehiclePhotosInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutVehiclePhotosNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehiclePhotosInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehiclePhotosInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehiclePhotosInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutVehiclePhotosInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutVehiclePhotosInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehiclePhotosInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutVehiclePhotosNestedInputObjectSchema = Schema
