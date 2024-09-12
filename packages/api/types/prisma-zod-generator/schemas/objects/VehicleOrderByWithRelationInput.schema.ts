import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { VehicleOwnershipOrderByRelationAggregateInputObjectSchema } from "./VehicleOwnershipOrderByRelationAggregateInput.schema"
import { VehicleTransferOrderByRelationAggregateInputObjectSchema } from "./VehicleTransferOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    ownerships: z.lazy(() => VehicleOwnershipOrderByRelationAggregateInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOrderByWithRelationInputObjectSchema = Schema
