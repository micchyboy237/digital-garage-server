import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { VehicleDetailsCountOrderByAggregateInputObjectSchema } from "./VehicleDetailsCountOrderByAggregateInput.schema"
import { VehicleDetailsAvgOrderByAggregateInputObjectSchema } from "./VehicleDetailsAvgOrderByAggregateInput.schema"
import { VehicleDetailsMaxOrderByAggregateInputObjectSchema } from "./VehicleDetailsMaxOrderByAggregateInput.schema"
import { VehicleDetailsMinOrderByAggregateInputObjectSchema } from "./VehicleDetailsMinOrderByAggregateInput.schema"
import { VehicleDetailsSumOrderByAggregateInputObjectSchema } from "./VehicleDetailsSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    taxStatus: z.lazy(() => SortOrderSchema).optional(),
    taxDueDate: z.lazy(() => SortOrderSchema).optional(),
    motStatus: z.lazy(() => SortOrderSchema).optional(),
    yearOfManufacture: z.lazy(() => SortOrderSchema).optional(),
    engineCapacity: z.lazy(() => SortOrderSchema).optional(),
    co2Emissions: z.lazy(() => SortOrderSchema).optional(),
    fuelType: z.lazy(() => SortOrderSchema).optional(),
    markedForExport: z.lazy(() => SortOrderSchema).optional(),
    colour: z.lazy(() => SortOrderSchema).optional(),
    typeApproval: z.lazy(() => SortOrderSchema).optional(),
    euroStatus: z.lazy(() => SortOrderSchema).optional(),
    dateOfLastV5CIssued: z.lazy(() => SortOrderSchema).optional(),
    motExpiryDate: z.lazy(() => SortOrderSchema).optional(),
    wheelplan: z.lazy(() => SortOrderSchema).optional(),
    monthOfFirstRegistration: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => VehicleDetailsCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => VehicleDetailsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehicleDetailsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehicleDetailsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => VehicleDetailsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDetailsOrderByWithAggregationInputObjectSchema = Schema
