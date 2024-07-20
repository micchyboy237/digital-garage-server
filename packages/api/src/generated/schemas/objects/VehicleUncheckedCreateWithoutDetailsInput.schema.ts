import { z } from "zod"
import { VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInput.schema"
import { DocumentUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./DocumentUncheckedCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutDetailsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    ownershipHistory: z.lazy(() => VehicleOwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedCreateWithoutDetailsInputObjectSchema = Schema
