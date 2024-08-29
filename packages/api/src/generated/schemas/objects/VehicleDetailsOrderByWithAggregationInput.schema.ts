import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehicleDetailsCountOrderByAggregateInputObjectSchema } from "./VehicleDetailsCountOrderByAggregateInput.schema"
import { VehicleDetailsAvgOrderByAggregateInputObjectSchema } from "./VehicleDetailsAvgOrderByAggregateInput.schema"
import { VehicleDetailsMaxOrderByAggregateInputObjectSchema } from "./VehicleDetailsMaxOrderByAggregateInput.schema"
import { VehicleDetailsMinOrderByAggregateInputObjectSchema } from "./VehicleDetailsMinOrderByAggregateInput.schema"
import { VehicleDetailsSumOrderByAggregateInputObjectSchema } from "./VehicleDetailsSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    colour: z.lazy(() => SortOrderSchema).optional(),
    yearOfManufacture: z.lazy(() => SortOrderSchema).optional(),
    taxStatus: z.lazy(() => SortOrderSchema).optional(),
    taxDueDate: z.lazy(() => SortOrderSchema).optional(),
    motStatus: z.lazy(() => SortOrderSchema).optional(),
    engineCapacity: z.lazy(() => SortOrderSchema).optional(),
    co2Emissions: z.lazy(() => SortOrderSchema).optional(),
    fuelType: z.lazy(() => SortOrderSchema).optional(),
    markedForExport: z.lazy(() => SortOrderSchema).optional(),
    typeApproval: z.lazy(() => SortOrderSchema).optional(),
    wheelplan: z.lazy(() => SortOrderSchema).optional(),
    artEndDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    motExpiryDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    monthOfFirstRegistration: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    euroStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    dateOfLastV5CIssued: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    realDrivingEmissions: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    revenueWeight: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    _count: z.lazy(() => VehicleDetailsCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => VehicleDetailsAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => VehicleDetailsMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => VehicleDetailsMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => VehicleDetailsSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDetailsOrderByWithAggregationInputObjectSchema = Schema
