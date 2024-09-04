import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutVehicleDocumentsInputObjectSchema = Schema
