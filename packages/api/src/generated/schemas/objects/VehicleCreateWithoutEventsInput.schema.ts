import { z } from "zod"
import { VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema } from "./VehicleDetailsCreateNestedOneWithoutVehicleInput.schema"
import { VehicleOwnershipCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleOwnershipCreateNestedManyWithoutVehicleInput.schema"
import { DocumentCreateNestedManyWithoutVehicleInputObjectSchema } from "./DocumentCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleCreateWithoutEventsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    details: z.lazy(() => VehicleDetailsCreateNestedOneWithoutVehicleInputObjectSchema),
    ownershipHistory: z.lazy(() => VehicleOwnershipCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleCreateWithoutEventsInputObjectSchema = Schema
