import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumEventTypeFilterObjectSchema } from "./EnumEventTypeFilter.schema"
import { EventTypeSchema } from "../enums/EventType.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { FloatNullableFilterObjectSchema } from "./FloatNullableFilter.schema"
import { DocumentListRelationFilterObjectSchema } from "./DocumentListRelationFilter.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { VehicleOwnershipRelationFilterObjectSchema } from "./VehicleOwnershipRelationFilter.schema"
import { VehicleOwnershipWhereInputObjectSchema } from "./VehicleOwnershipWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleEventWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => VehicleEventWhereInputObjectSchema), z.lazy(() => VehicleEventWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => VehicleEventWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => VehicleEventWhereInputObjectSchema), z.lazy(() => VehicleEventWhereInputObjectSchema).array()])
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
    documents: z.lazy(() => DocumentListRelationFilterObjectSchema).optional(),
    vehicle: z
      .union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)])
      .optional()
      .nullable(),
    createdBy: z
      .union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)])
      .optional()
      .nullable(),
    vehicleOwnership: z
      .union([z.lazy(() => VehicleOwnershipRelationFilterObjectSchema), z.lazy(() => VehicleOwnershipWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const VehicleEventWhereInputObjectSchema = Schema
