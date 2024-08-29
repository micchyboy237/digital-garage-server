import { z } from "zod"
import { OwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema } from "./OwnershipUncheckedCreateNestedManyWithoutVehicleInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedCreateWithoutTransfersInput> = z
  .object({
    id: z.string().optional(),
    make: z.string(),
    model: z.string(),
    registrationNumber: z.string(),
    ownerId: z.string(),
    ownerships: z.lazy(() => OwnershipUncheckedCreateNestedManyWithoutVehicleInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedCreateWithoutTransfersInputObjectSchema = Schema
