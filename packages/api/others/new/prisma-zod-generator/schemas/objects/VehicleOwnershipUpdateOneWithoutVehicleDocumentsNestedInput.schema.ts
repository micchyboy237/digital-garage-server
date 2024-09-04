import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipUpsertWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUpsertWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleDocumentsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleDocumentsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutVehicleDocumentsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleDocumentsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDocumentsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleDocumentsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutVehicleDocumentsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutVehicleDocumentsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleDocumentsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutVehicleDocumentsNestedInputObjectSchema = Schema
