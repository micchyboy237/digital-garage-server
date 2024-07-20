import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { MediaFileUncheckedCreateNestedManyWithoutDocumentInputObjectSchema } from "./MediaFileUncheckedCreateNestedManyWithoutDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUncheckedCreateWithoutCreatedByInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => DocumentTypeSchema),
    displayDate: z.coerce.date(),
    header: z.string(),
    description: z.string(),
    invoiceValue: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vehicleId: z.string(),
    files: z.lazy(() => MediaFileUncheckedCreateNestedManyWithoutDocumentInputObjectSchema).optional(),
  })
  .strict()

export const DocumentUncheckedCreateWithoutCreatedByInputObjectSchema = Schema
