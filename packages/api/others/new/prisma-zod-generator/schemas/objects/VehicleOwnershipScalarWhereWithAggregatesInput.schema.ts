import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { BoolWithAggregatesFilterObjectSchema } from "./BoolWithAggregatesFilter.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { DateTimeNullableWithAggregatesFilterObjectSchema } from "./DateTimeNullableWithAggregatesFilter.schema"

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
    isCurrentOwner: z.union([z.lazy(() => BoolWithAggregatesFilterObjectSchema), z.boolean()]).optional(),
    vehicleDisplayPhotoId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    startDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableWithAggregatesFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const VehicleOwnershipScalarWhereWithAggregatesInputObjectSchema = Schema
