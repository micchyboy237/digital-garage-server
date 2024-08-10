import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumEventTypeFilterObjectSchema } from "./EnumEventTypeFilter.schema"
import { EventTypeSchema } from "../enums/EventType.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { FloatNullableFilterObjectSchema } from "./FloatNullableFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventScalarWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => VehicleEventScalarWhereInputObjectSchema),
        z.lazy(() => VehicleEventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => VehicleEventScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => VehicleEventScalarWhereInputObjectSchema),
        z.lazy(() => VehicleEventScalarWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumEventTypeFilterObjectSchema), z.lazy(() => EventTypeSchema)]).optional(),
    header: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    price: z
      .union([z.lazy(() => FloatNullableFilterObjectSchema), z.number()])
      .optional()
      .nullable(),
    vehicleId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdById: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    vehicleOwnershipId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
  })
  .strict()

export const VehicleEventScalarWhereInputObjectSchema = Schema
