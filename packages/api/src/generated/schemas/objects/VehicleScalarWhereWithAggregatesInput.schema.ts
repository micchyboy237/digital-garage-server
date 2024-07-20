import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    make: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    model: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const VehicleScalarWhereWithAggregatesInputObjectSchema = Schema
