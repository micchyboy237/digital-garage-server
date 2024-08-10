import { z } from "zod"
import { VehicleOwnershipScalarWhereInputObjectSchema } from "./VehicleOwnershipScalarWhereInput.schema"
import { VehicleOwnershipUpdateManyMutationInputObjectSchema } from "./VehicleOwnershipUpdateManyMutationInput.schema"
import { VehicleOwnershipUncheckedUpdateManyWithoutVehicleOwnershipsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateManyWithoutVehicleOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleOwnershipUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateManyWithoutVehicleOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
