import { z } from "zod"
import { VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInput.schema"
import { VehicleTransferUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutOwnerInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    registrationNumber: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    ownerships: z.lazy(() => VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedCreateWithoutOwnerInputObjectSchema = Schema
