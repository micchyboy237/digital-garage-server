import { z } from "zod"
import { VehicleOwnershipScalarWhereInputObjectSchema } from "./VehicleOwnershipScalarWhereInput.schema"
import { VehicleOwnershipUpdateManyMutationInputObjectSchema } from "./VehicleOwnershipUpdateManyMutationInput.schema"
import { VehicleOwnershipUncheckedUpdateManyWithoutVehiclesInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateManyWithoutVehiclesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateManyWithWhereWithoutUserInput> = z
  .object({
    where: z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleOwnershipUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleOwnershipUncheckedUpdateManyWithoutVehiclesInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleOwnershipUpdateManyWithWhereWithoutUserInputObjectSchema = Schema
