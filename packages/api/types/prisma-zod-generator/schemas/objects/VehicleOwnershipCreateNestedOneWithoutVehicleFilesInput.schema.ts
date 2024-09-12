import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleFilesInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutVehicleFilesInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleFilesInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutVehicleFilesInputObjectSchema = Schema
