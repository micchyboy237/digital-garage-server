import { z } from "zod"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { EnumDocumentTypeFilterObjectSchema } from "./EnumDocumentTypeFilter.schema"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { FloatFilterObjectSchema } from "./FloatFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentScalarWhereInput> = z
  .object({
    AND: z
      .union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()])
      .optional(),
    OR: z
      .lazy(() => DocumentScalarWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([z.lazy(() => DocumentScalarWhereInputObjectSchema), z.lazy(() => DocumentScalarWhereInputObjectSchema).array()])
      .optional(),
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
  })
  .strict()

export const DocumentScalarWhereInputObjectSchema = Schema
