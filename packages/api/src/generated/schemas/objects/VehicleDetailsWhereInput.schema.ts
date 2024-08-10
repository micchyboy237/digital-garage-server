import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
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
    registrationNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    taxStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    taxDueDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    motStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    yearOfManufacture: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    engineCapacity: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    co2Emissions: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    fuelType: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    markedForExport: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    colour: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    typeApproval: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    euroStatus: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    dateOfLastV5CIssued: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    motExpiryDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    wheelplan: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    monthOfFirstRegistration: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    vehicle: z
      .union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleDetailsWhereInputObjectSchema = Schema
