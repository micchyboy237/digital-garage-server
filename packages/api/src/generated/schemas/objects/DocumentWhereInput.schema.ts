import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumDocumentTypeFilterObjectSchema } from "./EnumDocumentTypeFilter.schema"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { FloatFilterObjectSchema } from "./FloatFilter.schema"
import { VehicleRelationFilterObjectSchema } from "./VehicleRelationFilter.schema"
import { VehicleWhereInputObjectSchema } from "./VehicleWhereInput.schema"
import { UserRelationFilterObjectSchema } from "./UserRelationFilter.schema"
import { UserWhereInputObjectSchema } from "./UserWhereInput.schema"
import { MediaFileListRelationFilterObjectSchema } from "./MediaFileListRelationFilter.schema"

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
    displayDate: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    header: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    invoiceValue: z.union([z.lazy(() => FloatFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    vehicleId: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    createdById: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    vehicle: z.union([z.lazy(() => VehicleRelationFilterObjectSchema), z.lazy(() => VehicleWhereInputObjectSchema)]).optional(),
    createdBy: z.union([z.lazy(() => UserRelationFilterObjectSchema), z.lazy(() => UserWhereInputObjectSchema)]).optional(),
    files: z.lazy(() => MediaFileListRelationFilterObjectSchema).optional(),
  })
  .strict()

export const DocumentWhereInputObjectSchema = Schema
