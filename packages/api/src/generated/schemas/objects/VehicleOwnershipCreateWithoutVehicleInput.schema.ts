import { z } from "zod"
import { UserCreateNestedOneWithoutVehiclesInputObjectSchema } from "./UserCreateNestedOneWithoutVehiclesInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateWithoutVehicleInput> = z
  .object({
    id: z.string().optional(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVehiclesInputObjectSchema),
  })
  .strict()

export const VehicleOwnershipCreateWithoutVehicleInputObjectSchema = Schema
