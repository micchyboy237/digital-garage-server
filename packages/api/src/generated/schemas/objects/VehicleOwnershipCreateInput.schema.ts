import { z } from "zod"
import { UserCreateNestedOneWithoutVehiclesInputObjectSchema } from "./UserCreateNestedOneWithoutVehiclesInput.schema"
import { VehicleCreateNestedOneWithoutOwnershipHistoryInputObjectSchema } from "./VehicleCreateNestedOneWithoutOwnershipHistoryInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipCreateInput> = z
  .object({
    id: z.string().optional(),
    startDate: z.coerce.date().optional().nullable(),
    endDate: z.coerce.date().optional().nullable(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
    user: z.lazy(() => UserCreateNestedOneWithoutVehiclesInputObjectSchema),
    vehicle: z.lazy(() => VehicleCreateNestedOneWithoutOwnershipHistoryInputObjectSchema),
  })
  .strict()

export const VehicleOwnershipCreateInputObjectSchema = Schema
