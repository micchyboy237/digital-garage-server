import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleDetailsScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleDetailsScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleDetailsScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleDetailsScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleDetailsScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    taxStatus: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    taxDueDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    motStatus: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    yearOfManufacture: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    engineCapacity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    co2Emissions: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    fuelType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    markedForExport: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
    colour: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    typeApproval: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    euroStatus: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    dateOfLastV5CIssued: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    motExpiryDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    wheelplan: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    monthOfFirstRegistration: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const VehicleDetailsScalarWhereWithAggregatesInputObjectSchema = Schema
