import { z } from "zod"
import { VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateNestedOneWithoutVehicleInput.schema"
import { UserCreateNestedOneWithoutVehiclesInputObjectSchema } from "./UserCreateNestedOneWithoutVehiclesInput.schema"
import { VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateWithoutOwnershipsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    details: z.lazy(() => VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema),
    owner: z.lazy(() => UserCreateNestedOneWithoutVehiclesInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateWithoutOwnershipsInputObjectSchema = Schema
