import { z } from "zod"
import { StringWithAggregatesFilterObjectSchema } from "./StringWithAggregatesFilter.schema"
import { EnumDocumentTypeWithAggregatesFilterObjectSchema } from "./EnumDocumentTypeWithAggregatesFilter.schema"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { DateTimeWithAggregatesFilterObjectSchema } from "./DateTimeWithAggregatesFilter.schema"
import { FloatWithAggregatesFilterObjectSchema } from "./FloatWithAggregatesFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentScalarWhereWithAggregatesInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema),
        z.lazy(() => DocumentScalarWhereWithAggregatesInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    type: z.union([z.lazy(() => EnumDocumentTypeWithAggregatesFilterObjectSchema), z.lazy(() => DocumentTypeSchema)]).optional(),
    displayDate: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    header: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    description: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    invoiceValue: z.union([z.lazy(() => FloatWithAggregatesFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeWithAggregatesFilterObjectSchema), z.coerce.date()]).optional(),
    vehicleId: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
    createdById: z.union([z.lazy(() => StringWithAggregatesFilterObjectSchema), z.string()]).optional(),
  })
  .strict()

export const DocumentScalarWhereWithAggregatesInputObjectSchema = Schema
