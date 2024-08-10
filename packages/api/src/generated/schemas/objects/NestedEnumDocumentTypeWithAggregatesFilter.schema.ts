import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { NestedIntFilterObjectSchema } from "./NestedIntFilter.schema"
import { NestedEnumDocumentTypeFilterObjectSchema } from "./NestedEnumDocumentTypeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.NestedEnumDocumentTypeWithAggregatesFilter> = z
  .object({
    equals: z.lazy(() => DocumentTypeSchema).optional(),
    in: z.union([z.lazy(() => DocumentTypeSchema).array(), z.lazy(() => DocumentTypeSchema)]).optional(),
    notIn: z.union([z.lazy(() => DocumentTypeSchema).array(), z.lazy(() => DocumentTypeSchema)]).optional(),
    not: z
      .union([z.lazy(() => DocumentTypeSchema), z.lazy(() => NestedEnumDocumentTypeWithAggregatesFilterObjectSchema)])
      .optional(),
    _count: z.lazy(() => NestedIntFilterObjectSchema).optional(),
    _min: z.lazy(() => NestedEnumDocumentTypeFilterObjectSchema).optional(),
    _max: z.lazy(() => NestedEnumDocumentTypeFilterObjectSchema).optional(),
  })
  .strict()

export const NestedEnumDocumentTypeWithAggregatesFilterObjectSchema = Schema
