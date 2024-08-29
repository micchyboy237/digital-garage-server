import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { PhotoOrderByRelationAggregateInputObjectSchema } from "./PhotoOrderByRelationAggregateInput.schema"
import { VehicleDocumentOrderByRelationAggregateInputObjectSchema } from "./VehicleDocumentOrderByRelationAggregateInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { OwnershipOrderByWithRelationInputObjectSchema } from "./OwnershipOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehiclePostOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    date: z.lazy(() => SortOrderSchema).optional(),
    title: z.lazy(() => SortOrderSchema).optional(),
    category: z.lazy(() => SortOrderSchema).optional(),
    description: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    type: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    ownershipId: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    photos: z.lazy(() => PhotoOrderByRelationAggregateInputObjectSchema).optional(),
    documents: z.lazy(() => VehicleDocumentOrderByRelationAggregateInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    ownership: z.lazy(() => OwnershipOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const VehiclePostOrderByWithRelationInputObjectSchema = Schema
