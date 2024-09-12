import { z } from "zod"
import { VehicleScalarWhereInputObjectSchema } from "./VehicleScalarWhereInput.schema"
import { VehicleUpdateManyMutationInputObjectSchema } from "./VehicleUpdateManyMutationInput.schema"
import { VehicleUncheckedUpdateManyWithoutVehiclesInputObjectSchema } from "./VehicleUncheckedUpdateManyWithoutVehiclesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateManyWithWhereWithoutOwnerInput> = z
  .object({
    where: z.lazy(() => VehicleScalarWhereInputObjectSchema),
    data: z.union([
      z.lazy(() => VehicleUpdateManyMutationInputObjectSchema),
      z.lazy(() => VehicleUncheckedUpdateManyWithoutVehiclesInputObjectSchema),
    ]),
  })
  .strict()

export const VehicleUpdateManyWithWhereWithoutOwnerInputObjectSchema = Schema
