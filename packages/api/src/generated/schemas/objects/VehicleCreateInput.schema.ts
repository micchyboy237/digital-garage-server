import { z } from "zod"
import { VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateNestedOneWithoutVehicleInput.schema"
import { UserCreateNestedOneWithoutVehiclesInputObjectSchema } from "./UserCreateNestedOneWithoutVehiclesInput.schema"
import { OwnershipCreateNestedManyWithoutVehicleInputObjectSchema } from "./OwnershipCreateNestedManyWithoutVehicleInput.schema"
import { VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    details: z.lazy(() => VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema),
    owner: z.lazy(() => UserCreateNestedOneWithoutVehiclesInputObjectSchema).optional(),
    ownerships: z.lazy(() => OwnershipCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateInputObjectSchema = Schema
