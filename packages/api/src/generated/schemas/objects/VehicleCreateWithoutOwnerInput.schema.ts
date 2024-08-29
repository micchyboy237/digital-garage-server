import { z } from "zod"
import { VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateNestedOneWithoutVehicleInput.schema"
import { OwnershipCreateNestedManyWithoutVehicleInputObjectSchema } from "./OwnershipCreateNestedManyWithoutVehicleInput.schema"
import { VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleTransferCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    details: z.lazy(() => VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema),
    ownerships: z.lazy(() => OwnershipCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateWithoutOwnerInputObjectSchema = Schema
