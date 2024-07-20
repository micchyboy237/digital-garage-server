import { z } from "zod"
import { DocumentUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./DocumentUncheckedCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutOwnershipHistoryInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    registrationNumber: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    documents: z.lazy(() => DocumentUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedCreateWithoutOwnershipHistoryInputObjectSchema = Schema
