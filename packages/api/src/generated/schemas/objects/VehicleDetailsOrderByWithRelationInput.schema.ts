import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { SortOrderInputObjectSchema } from "./SortOrderInput.schema"
import { VehicleOrderByWithRelationInputObjectSchema } from "./VehicleOrderByWithRelationInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsOrderByWithRelationInput> = z
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
    vehicle: z.lazy(() => VehicleOrderByWithRelationInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDetailsOrderByWithRelationInputObjectSchema = Schema
