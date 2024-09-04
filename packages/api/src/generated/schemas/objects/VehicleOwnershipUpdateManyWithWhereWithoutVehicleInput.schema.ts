import { z } from "zod"
import { VehicleOwnershipScalarWhereInputObjectSchema } from "./VehicleOwnershipScalarWhereInput.schema"
import { VehicleOwnershipUpdateManyMutationInputObjectSchema } from "./VehicleOwnershipUpdateManyMutationInput.schema"
import { VehicleOwnershipUncheckedUpdateManyWithoutOwnershipsInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateManyWithoutOwnershipsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateManyWithWhereWithoutVehicleInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleOwnershipUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateManyWithoutOwnershipsInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpdateManyWithWhereWithoutVehicleInputObjectSchema = Schema
