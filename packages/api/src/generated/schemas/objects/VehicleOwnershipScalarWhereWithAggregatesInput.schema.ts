import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    vehicleId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    isCurrentOwner: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
    isTemporaryOwner: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
    canEditDocuments: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
  })
  .strict()

export const VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema = Schema
