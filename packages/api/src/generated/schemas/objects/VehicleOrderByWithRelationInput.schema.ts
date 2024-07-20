import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { VehicleDetailsOrderByWithRelationInputObjectSchema } from "./VehicleDetailsOrderByWithRelationInput.schema"
import { VehicleOwnershipOrderByRelationAggregateInputObjectSchema } from "./VehicleOwnershipOrderByRelationAggregateInput.schema"
import { DocumentOrderByRelationAggregateInputObjectSchema } from "./DocumentOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    details: z.lazy(() => VehicleDetailsOrderByWithRelationInputObjectSchema).optional(),
    ownershipHistory: z.lazy(() => VehicleOwnershipOrderByRelationAggregateInputObjectSchema).optional(),
    documents: z.lazy(() => DocumentOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOrderByWithRelationInputObjectSchema = Schema
