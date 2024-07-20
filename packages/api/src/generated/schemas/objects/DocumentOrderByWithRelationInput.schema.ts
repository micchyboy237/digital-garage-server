import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./VehicleOrderByWithRelationInput.schema"
import { UserOrderByWithRelationInputObjectSchema } from "./UserOrderByWithRelationInput.schema"
import { MediaFileOrderByRelationAggregateInputObjectSchema } from "./MediaFileOrderByRelationAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentOrderByWithRelationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    type: z.lazy(() => SortOrderSchema).optional(),
    displayDate: z.lazy(() => SortOrderSchema).optional(),
    header: z.lazy(() => SortOrderSchema).optional(),
    description: z.lazy(() => SortOrderSchema).optional(),
    invoiceValue: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    vehicleId: z.lazy(() => SortOrderSchema).optional(),
    createdById: z.lazy(() => SortOrderSchema).optional(),
    vehicle: z.lazy(() => VehicleOrderByWithRelationInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserOrderByWithRelationInputObjectSchema).optional(),
    files: z.lazy(() => MediaFileOrderByRelationAggregateInputObjectSchema).optional(),
  })
  .strict()

export const DocumentOrderByWithRelationInputObjectSchema = Schema
