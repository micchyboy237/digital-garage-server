import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { IntNullableFilterObjectSchema } from "./IntNullableFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { BoolNullableFilterObjectSchema } from "./BoolNullableFilter.schema"
import { VehicleOwnershipRelationFilterObjectSchema } from "./VehicleOwnershipRelationFilter.schema"
import { VehicleOwnershipWhereInputObjectSchema } from "./VehicleOwnershipWhereInput.schema"

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
    fromApi: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    make: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    colour: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    yearOfManufacture: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    taxStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    taxDueDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    motStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    motExpiryDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    engineCapacity: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    co2Emissions: z
      .union([z.lazy(() => IntNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    fuelType: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    markedForExport: z
      .union([z.lazy(() => BoolNullableFilterObjectSchema), z.boolean()])
      .optional()
      .nullable(),
    typeApproval: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    wheelplan: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    artEndDate: z
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
    ownershipId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    ownership: z
      .union([z.lazy(() => VehicleOwnershipRelationFilterObjectSchema), z.lazy(() => VehicleOwnershipWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDetailsWhereInputObjectSchema = Schema
