import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumDocumentTypeFilterObjectSchema } from "./EnumDocumentTypeFilter.schema"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { StringNullableFilterObjectSchema } from "./StringNullableFilter.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { MediaFileListRelationFilterObjectSchema } from "./MediaFileListRelationFilter.schema"
import { VehicleEventRelationFilterObjectSchema } from "./VehicleEventRelationFilter.schema"
import { VehicleEventWhereInputObjectSchema } from "./VehicleEventWhereInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentWhereInput> = z
  .object({
    AND: z.union([z.lazy(() => DocumentWhereInputObjectSchema), z.lazy(() => DocumentWhereInputObjectSchema).array()]).optional(),
    OR: z
      .lazy(() => DocumentWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z.union([z.lazy(() => DocumentWhereInputObjectSchema), z.lazy(() => DocumentWhereInputObjectSchema).array()]).optional(),
    id: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumDocumentTypeFilterObjectSchema), z.lazy(() => DocumentTypeSchema)]).optional(),
    date: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    title: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    description: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    vehicleId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vehicleEventId: z
      .union([z.lazy(() => StringNullableFilterObjectSchema), z.string()])
      .optional()
      .nullable(),
    vehicle: z
      .union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)])
      .optional()
      .nullable(),
    createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
    files: z.lazy(() => MediaFileListRelationFilterObjectSchema).optional(),
    vehicleEvent: z
      .union([z.lazy(() => VehicleEventRelationFilterObjectSchema), z.lazy(() => VehicleEventWhereInputObjectSchema)])
      .optional()
      .nullable(),
  })
  .strict()

export const DocumentWhereInputObjectSchema = Schema
