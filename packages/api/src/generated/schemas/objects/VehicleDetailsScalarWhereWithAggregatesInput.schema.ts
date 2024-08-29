import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { IntWithAggregatesFilterObjectSchema } from "./IntWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { IntNullableWithAggregatesFilterObjectSchema } from "./IntNullableWithAggregatesFilter.schema"

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
    make: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    colour: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    yearOfManufacture: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    taxStatus: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    taxDueDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    motStatus: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    engineCapacity: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    co2Emissions: z.union([z.lazy(() => IntWithAggregatesFilterObjectSchema), z.number()]).optional(),
    fuelType: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    markedForExport: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
    typeApproval: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    wheelplan: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    artEndDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    motExpiryDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    monthOfFirstRegistration: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    euroStatus: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dateOfLastV5CIssued: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    realDrivingEmissions: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    revenueWeight: z
      .union([z.lazy(() => IntNullableWithAggregatesFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDetailsScalarWhereWithAggregatesInputObjectSchema = Schema
