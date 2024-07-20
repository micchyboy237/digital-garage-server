import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { NestedEnumDocumentTypeFilterObjectSchema } from "./NestedEnumDocumentTypeFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.EnumDocumentTypeFilter> = z
  .object({
    equals: z.lazy(() => DocumentTypeSchema).optional(),
    in: z.union([z.lazy(() => DocumentTypeSchema).array(), z.lazy(() => DocumentTypeSchema)]).optional(),
    notIn: z.union([z.lazy(() => DocumentTypeSchema).array(), z.lazy(() => DocumentTypeSchema)]).optional(),
    not: z.union([z.lazy(() => DocumentTypeSchema), z.lazy(() => NestedEnumDocumentTypeFilterObjectSchema)]).optional(),
  })
  .strict()

export const EnumDocumentTypeFilterObjectSchema = Schema
