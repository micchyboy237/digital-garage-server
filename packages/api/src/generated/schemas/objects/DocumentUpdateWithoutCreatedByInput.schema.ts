import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { EnumDocumentTypeFieldUpdateOperationsInputObjectSchema } from "./EnumDocumentTypeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { FloatFieldUpdateOperationsInputObjectSchema } from "./FloatFieldUpdateOperationsInput.schema"
import { VehicleUpdateOneRequiredWithoutDocumentsNestedInputObjectSchema } from "./VehicleUpdateOneRequiredWithoutDocumentsNestedInput.schema"
import { MediaFileUpdateManyWithoutDocumentNestedInputObjectSchema } from "./MediaFileUpdateManyWithoutDocumentNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpdateWithoutCreatedByInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z
      .union([z.lazy(() => DocumentTypeSchema), z.lazy(() => EnumDocumentTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    displayDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    header: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    description: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    invoiceValue: z.union([z.number(), z.lazy(() => FloatFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicle: z.lazy(() => VehicleUpdateOneRequiredWithoutDocumentsNestedInputObjectSchema).optional(),
    files: z.lazy(() => MediaFileUpdateManyWithoutDocumentNestedInputObjectSchema).optional(),
  })
  .strict()

export const DocumentUpdateWithoutCreatedByInputObjectSchema = Schema
