import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { IntNullableFilterObjectSchema } from "./IntNullableFilter.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDetailsWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => VehicleDetailsWhereInputObjectSchema), z.lazy(() => VehicleDetailsWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => VehicleDetailsWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => VehicleDetailsWhereInputObjectSchema), z.lazy(() => VehicleDetailsWhereInputObjectSchema).array()])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    make: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    colour: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    yearOfManufacture: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    taxStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    taxDueDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    motStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    engineCapacity: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    co2Emissions: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    fuelType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    markedForExport: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    typeApproval: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    wheelplan: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    artEndDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    motExpiryDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    monthOfFirstRegistration: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    euroStatus: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    dateOfLastV5CIssued: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    realDrivingEmissions: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    revenueWeight: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    vehicle: z
      .union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDetailsWhereInputObjectSchema = Schema
