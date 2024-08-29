import { z } from "zod"
import { UserCreateNestedOneWithoutVehiclesInputObjectSchema } from "./UserCreateNestedOneWithoutVehiclesInput.schema"
import { OwnershipCreateNestedManyWithoutVehicleInputObjectSchema } from "./OwnershipCreateNestedManyWithoutVehicleInput.schema"
import { VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateWithoutDetailsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    owner: z.lazy(() => UserCreateNestedOneWithoutVehiclesInputObjectSchema).optional(),
    ownerships: z.lazy(() => OwnershipCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateWithoutDetailsInputObjectSchema = Schema
