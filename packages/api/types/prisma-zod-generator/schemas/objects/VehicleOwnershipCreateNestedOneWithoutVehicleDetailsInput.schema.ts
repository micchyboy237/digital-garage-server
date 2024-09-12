import { z } from "zod"
import { VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipCreateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInputObjectSchema } from "./VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInput.schema"
import { VehicleOwnershipWhereUniqueInputObjectSchema } from "./VehicleOwnershipWhereUniqueInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateNestedOneWithoutVehicleDetailsInput> = z
  .object({
    create: z
      .union([
        z.lazy(() => VehicleOwnershipCreateWithoutVehicleDetailsInputObjectSchema),
        z.lazy(() => VehicleOwnershipUncheckedCreateWithoutVehicleDetailsInputObjectSchema),
      ])
      .optional(),
    connectOrCreate: z.lazy(() => VehicleOwnershipCreateOrConnectWithoutVehicleDetailsInputObjectSchema).optional(),
    connect: z.lazy(() => VehicleOwnershipWhereUniqueInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipCreateNestedOneWithoutVehicleDetailsInputObjectSchema = Schema
