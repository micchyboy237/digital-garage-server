import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { EnumEventTypeWithAggregatesFilterObjectSchema } from "./EnumEventTypeWithAggregatesFilter.schema"
import { EventTypeSchema } from "../enums/EventType.schema"
import { StringNullableWithAggregatesFilterObjectSchema } from "./StringNullableWithAggregatesFilter.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { FloatNullableWithAggregatesFilterObjectSchema } from "./FloatNullableWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleEventScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleEventScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleEventScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleEventScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => VehicleEventScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumEventTypeWithAggregatesFilterObjectSchema), z.lazy(() => EventTypeSchema)]).optional(),
    header: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    date: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    price: z
      .union([z.lazy(() => FloatNullableWithAggregatesFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    vehicleId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdById: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    vehicleOwnershipId: z
      .union([z.lazy(() => StringNullableWithAggregatesFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const VehicleEventScalarWhereWithAggregatesInputObjectSchema = Schema
