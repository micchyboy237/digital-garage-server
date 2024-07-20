import { z } from "zod"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipSelect> = z
  .object({
    id: z.boolean().optional(),
    userId: z.boolean().optional(),
    vehicleId: z.boolean().optional(),
    startDate: z.boolean().optional(),
    endDate: z.boolean().optional(),
    isCurrentOwner: z.boolean().optional(),
    isTemporaryOwner: z.boolean().optional(),
    canEditDocuments: z.boolean().optional(),
    user: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleOwnershipSelectObjectSchema = Schema
