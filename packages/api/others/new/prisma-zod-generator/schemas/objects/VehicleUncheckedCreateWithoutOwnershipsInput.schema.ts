import { z } from "zod"
import { VehicleTransferUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./VehicleTransferUncheckedCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutOwnershipsInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    registrationNumber: z.string(),
    ownerId: z.string(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    transfers: z.lazy(() => VehicleTransferUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedCreateWithoutOwnershipsInputObjectSchema = Schema
