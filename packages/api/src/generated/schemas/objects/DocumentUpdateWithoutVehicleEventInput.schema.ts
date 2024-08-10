import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DocumentTypeSchema } from "../enums/DocumentType.schema"
import { EnumDocumentTypeFieldUpdateOperationsInputObjectSchema } from "./EnumDocumentTypeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { VehicleUpdateOneWithoutDocumentsNestedInputObjectSchema } from "./VehicleUpdateOneWithoutDocumentsNestedInput.schema"
import { UserUpdateOneRequiredWithoutDocumentsNestedInputObjectSchema } from "./UserUpdateOneRequiredWithoutDocumentsNestedInput.schema"
import { MediaFileUpdateManyWithoutDocumentNestedInputObjectSchema } from "./MediaFileUpdateManyWithoutDocumentNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.DocumentUpdateWithoutVehicleEventInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z
      .union([z.lazy(() => DocumentTypeSchema), z.lazy(() => EnumDocumentTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    date: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    title: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    description: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicle: z.lazy(() => VehicleUpdateOneWithoutDocumentsNestedInputObjectSchema).optional(),
    createdBy: z.lazy(() => UserUpdateOneRequiredWithoutDocumentsNestedInputObjectSchema).optional(),
    files: z.lazy(() => MediaFileUpdateManyWithoutDocumentNestedInputObjectSchema).optional(),
  })
  .strict()

export const DocumentUpdateWithoutVehicleEventInputObjectSchema = Schema
