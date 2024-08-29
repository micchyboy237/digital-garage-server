import { z } from "zod"
import { OwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedCreateNestedManyWithoutVehicleInput.schema"
import { VehicleTransferUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutDetailsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    ownerId: z.string(),
    ownerships: z.lazy(() => OwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedCreateWithoutDetailsInputObjectSchema = Schema
