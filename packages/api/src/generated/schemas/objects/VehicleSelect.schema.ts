import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipFindManySchema } from "../findManyVehicleOwnership.schema"
import { VehicleTransferFindManySchema } from "../findManyVehicleTransfer.schema"
import { VehicleCountOutputTypeArgsObjectSchema } from "./VehicleCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleSelect> = z
  .object({
    id: z.boolean().optional(),
    make: z.boolean().optional(),
    model: z.boolean().optional(),
    registrationNumber: z.boolean().optional(),
    ownerId: z.boolean().optional(),
    owner: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    ownerships: z.union([z.boolean(), z.lazy(() => VehicleOwnershipFindManySchema)]).optional(),
    transfers: z.union([z.boolean(), z.lazy(() => VehicleTransferFindManySchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleSelectObjectSchema = Schema
