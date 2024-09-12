import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleFilesInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleFilesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutVehicleFilesInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleFilesInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleFilesInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutVehicleFilesInputObjectSchema = Schema
