import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsMinOrderByAggregateInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    fromApi: z.lazy(() => SortOrderSchema).optional(),
    registrationNumber: z.lazy(() => SortOrderSchema).optional(),
    make: z.lazy(() => SortOrderSchema).optional(),
    model: z.lazy(() => SortOrderSchema).optional(),
    colour: z.lazy(() => SortOrderSchema).optional(),
    yearOfManufacture: z.lazy(() => SortOrderSchema).optional(),
    taxStatus: z.lazy(() => SortOrderSchema).optional(),
    taxDueDate: z.lazy(() => SortOrderSchema).optional(),
    motStatus: z.lazy(() => SortOrderSchema).optional(),
    motExpiryDate: z.lazy(() => SortOrderSchema).optional(),
    engineCapacity: z.lazy(() => SortOrderSchema).optional(),
    co2Emissions: z.lazy(() => SortOrderSchema).optional(),
    fuelType: z.lazy(() => SortOrderSchema).optional(),
    markedForExport: z.lazy(() => SortOrderSchema).optional(),
    typeApproval: z.lazy(() => SortOrderSchema).optional(),
    wheelplan: z.lazy(() => SortOrderSchema).optional(),
    artEndDate: z.lazy(() => SortOrderSchema).optional(),
    monthOfFirstRegistration: z.lazy(() => SortOrderSchema).optional(),
    euroStatus: z.lazy(() => SortOrderSchema).optional(),
    dateOfLastV5CIssued: z.lazy(() => SortOrderSchema).optional(),
    realDrivingEmissions: z.lazy(() => SortOrderSchema).optional(),
    revenueWeight: z.lazy(() => SortOrderSchema).optional(),
    ownershipId: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
  })
  .strict()

export const VehicleDetailsMinOrderByAggregateInputObjectSchema = Schema
