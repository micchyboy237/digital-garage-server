import { z } from "zod"
import { VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInput.schema"
import { VehicleEventUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleEventUncheckedCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutDocumentsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    registrationNumber: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    ownershipHistory: z.lazy(() => VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedCreateWithoutDocumentsInputObjectSchema = Schema
