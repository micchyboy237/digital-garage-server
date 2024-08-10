import { z } from "zod"
import { DocumentFindManySchema } from "../findManyDocument.schema"
import { VehicleArgsObjectSchema } from "./VehicleArgs.schema"
import { UserArgsObjectSchema } from "./UserArgs.schema"
import { VehicleOwnershipArgsObjectSchema } from "./VehicleOwnershipArgs.schema"
import { VehicleEventCountOutputTypeArgsObjectSchema } from "./VehicleEventCountOutputTypeArgs.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventSelect> = z
  .object({
    id: z.boolean().optional(),
    type: z.boolean().optional(),
    header: z.boolean().optional(),
    description: z.boolean().optional(),
    date: z.boolean().optional(),
    price: z.boolean().optional(),
    documents: z.union([z.boolean(), z.lazy(() => DocumentFindManySchema)]).optional(),
    vehicleId: z.boolean().optional(),
    vehicle: z.union([z.boolean(), z.lazy(() => VehicleArgsObjectSchema)]).optional(),
    createdById: z.boolean().optional(),
    createdBy: z.union([z.boolean(), z.lazy(() => UserArgsObjectSchema)]).optional(),
    vehicleOwnershipId: z.boolean().optional(),
    vehicleOwnership: z.union([z.boolean(), z.lazy(() => VehicleOwnershipArgsObjectSchema)]).optional(),
    createdAt: z.boolean().optional(),
    updatedAt: z.boolean().optional(),
    _count: z.union([z.boolean(), z.lazy(() => VehicleEventCountOutputTypeArgsObjectSchema)]).optional(),
  })
  .strict()

export const VehicleEventSelectObjectSchema = Schema
