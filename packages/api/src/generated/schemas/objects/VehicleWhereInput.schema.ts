import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { VehicleDetailsRelationFilterObjectSchema } from "./VehicleDetailsRelationFilter.schema"
import { VehicleDetailsWhereInputObjectSchema } from "./VehicleDetailsWhereInput.schema"
import { VehicleOwnershipListRelationFilterObjectSchema } from "./VehicleOwnershipListRelationFilter.schema"
import { DocumentListRelationFilterObjectSchema } from "./DocumentListRelationFilter.schema"
import { VehicleEventListRelationFilterObjectSchema } from "./VehicleEventListRelationFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => VehicleWhereInputObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => VehicleWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => VehicleWhereInputObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    make: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    model: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    registrationNumber: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    details: z
      .union([z.lazy(() => VehicleDetailsRelationFilterObjectSchema), z.lazy(() => VehicleDetailsWhereInputObjectSchema)])
      .optional(),
    ownershipHistory: z.lazy(() => VehicleOwnershipListRelationFilterObjectSchema).optional(),
    documents: z.lazy(() => DocumentListRelationFilterObjectSchema).optional(),
    events: z.lazy(() => VehicleEventListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const VehicleWhereInputObjectSchema = Schema
