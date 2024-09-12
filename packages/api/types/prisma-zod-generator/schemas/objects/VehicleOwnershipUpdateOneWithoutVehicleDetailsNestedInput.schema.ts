import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipUpsertWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUpsertWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"
import { VehicleOwnershipUpdateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUpdateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipUncheckedUpdateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateWithoutVehicleDetailsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateOneWithoutVehicleDetailsNestedInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInputObjectSchema).optional(),
    upsert: z.lazy(() => VehicleOwnershipUpsertWithoutVehicleDetailsInputObjectSchema).optional(),
    disconnect: z.boolean().optional(),
    delete: z.boolean().optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
    update: z
      .union([
        z.lazy(() => VehicleOwnershipUpdateWithoutVehicleDetailsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedUpdateWithoutVehicleDetailsInputObjectSchema),
      ])
      .optional(),
  })
  .strict()

export const VehicleOwnershipUpdateOneWithoutVehicleDetailsNestedInputObjectSchema = Schema
