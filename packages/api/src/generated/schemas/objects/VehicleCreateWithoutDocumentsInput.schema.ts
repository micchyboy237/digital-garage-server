import { z } from "zod"
import { VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateNestedOneWithoutVehicleInput.schema"
import { VehicleOwnershipCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateNestedManyWithoutVehicleInput.schema"
import { VehicleEventCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleEventCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateWithoutDocumentsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    details: z.lazy(() => VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema),
    ownershipHistory: z.lazy(() => VehicleOwnershipCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateWithoutDocumentsInputObjectSchema = Schema
