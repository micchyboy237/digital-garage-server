import { z } from "zod"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { VehicleCreateNestedOneWithoutDocumentsInputObjectSchema } from "./VehicleCreateNestedOneWithoutDocumentsInput.schema"
import { UserCreateNestedOneWithoutDocumentsInputObjectSchema } from "./UserCreateNestedOneWithoutDocumentsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentCreateWithoutFilesInput> = z
  .object({
    id: z.string().optional(),
    type: z.lazy(() => DocumentTypeSchema),
    displayDate: z.coerce.date(),
    header: z.string(),
    description: z.string(),
    invoiceValue: z.number(),
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    vehicle: z.lazy(() => VehicleCreateNestedOneWithoutDocumentsInputObjectSchema),
    createdBy: z.lazy(() => UserCreateNestedOneWithoutDocumentsInputObjectSchema),
  })
  .strict()

export const DocumentCreateWithoutFilesInputObjectSchema = Schema
