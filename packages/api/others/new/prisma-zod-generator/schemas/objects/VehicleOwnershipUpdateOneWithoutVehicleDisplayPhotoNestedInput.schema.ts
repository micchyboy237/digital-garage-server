import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipUpsertWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUpsertWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleDisplayPhotoInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDisplayPhotoInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutVehicleDisplayPhotoInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema = Schema
