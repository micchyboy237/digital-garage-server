import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeNullableFilterObjectSchema } from "./DateTimeNullableFilter.schema"
import { BoolFilterObjectSchema } from "./BoolFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema),
        z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleOwnershipScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema),
        z.lazy(() => VehicleOwnershipScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    userId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vehicleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    startDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    endDate: z
      .union([z.lazy(() => DateTimeNullableFilterObjectSchema), z.coerce.date()])
      .optional()
      .nullable(),
    isCurrentOwner: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    isTemporaryOwner: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    canEditDocuments: z.union([z.lazy(() => BoolFilterObjectSchema), z.boolean()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const VehicleOwnershipScalarWhereInputObjectSchema = Schema
