import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { UserCreateNestedOneWithoutDocumentsInputObjectSchema } from "./UserCreateNestedOneWithoutDocumentsInput.schema"
import { MediaFileCreateNestedManyWithoutDocumentInputObjectSchema } from "./MediaFileCreateNestedManyWithoutDocumentInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateWithoutVehicleInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => DocumentTypeSchema),
    displayDate: z.coerce.date(),
    header: z.string(),
    description: z.string(),
    invoiceValue: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutDocumentsInputObjectSchema),
    files: z.lazy(() => MediaFileCreateNestedManyWithoutDocumentInputObjectSchema).optional(),
  })
  .strict()

export const DocumentCreateWithoutVehicleInputObjectSchema = Schema
