import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { MediaFileUpdateOneRequiredWithoutVehicleDocumentNestedInputObjectSchema } from "./MediaFileUpdateOneRequiredWithoutVehicleDocumentNestedInput.schema"
import { VehiclePostUpdateOneWithoutDocumentsNestedInputObjectSchema } from "./VehiclePostUpdateOneWithoutDocumentsNestedInput.schema"
import { VehicleOwnershipUpdateOneWithoutVehicleDocumentsNestedInputObjectSchema } from "./VehicleOwnershipUpdateOneWithoutVehicleDocumentsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    file: z.lazy(() => MediaFileUpdateOneRequiredWithoutVehicleDocumentNestedInputObjectSchema).optional(),
    post: z.lazy(() => VehiclePostUpdateOneWithoutDocumentsNestedInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipUpdateOneWithoutVehicleDocumentsNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentUpdateInputObjectSchema = Schema
