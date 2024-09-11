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
    fromApi: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    yearOfManufacture: z.lazy(() => SortOrderSchema).optional(),
    engineCapacity: z.lazy(() => SortOrderSchema).optional(),
    fuelType: z.lazy(() => SortOrderSchema).optional(),
    colour: z.lazy(() => SortOrderSchema).optional(),
    taxStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    taxDueDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    motStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    motExpiryDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    co2Emissions: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    markedForExport: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    typeApproval: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    wheelplan: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    artEndDate: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    monthOfFirstRegistration: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    euroStatus: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    dateOfLastV5CIssued: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    realDrivingEmissions: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    revenueWeight: z.union([z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputObjectSchema)]).optional(),
    ownershipId: z.lazy(() => SortOrderSchema).optional(),
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
