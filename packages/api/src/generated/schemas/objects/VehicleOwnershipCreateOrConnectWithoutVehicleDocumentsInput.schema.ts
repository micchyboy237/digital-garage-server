import { z } from "zod"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema),
    create: z.union([
      z.lazy(() => VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInputObjectSchema = Schema
