import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleFilesInput.schema"
import { VehicleOwnershipUpsertWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUpsertWithoutVehicleFilesInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutVehicleFilesNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleFilesInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutVehicleFilesInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutVehicleFilesInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleFilesInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutVehicleFilesNestedInputObjectSchema = Schema
