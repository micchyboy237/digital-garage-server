import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { VehicleDetailsOrderByWithRelationInputObjectSchema } from "./VehicleDetailsOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { OwnershipOrderByRelationAggregateInputObjectSchema } from "./OwnershipOrderByRelationAggregateInput.schema"
import { VehicleTransferOrderByRelationAggregateInputObjectSchema } from "./VehicleTransferOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    ownerId: z.lazy(() => SortOrderSchema).optional(),
    details: z.lazy(() => VehicleDetailsOrderByWithRelationInputObjectSchema).optional(),
    owner: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    ownerships: z.lazy(() => OwnershipOrderByRelationAggregateInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOrderByWithRelationInputObjectSchema = Schema
