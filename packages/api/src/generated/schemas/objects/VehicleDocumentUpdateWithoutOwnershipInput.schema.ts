import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { VehiclePostUpdateOneWithoutDocumentsNestedInputObjectSchema } from "./VehiclePostUpdateOneWithoutDocumentsNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleDocumentUpdateWithoutOwnershipInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    fileUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    post: z.lazy(() => VehiclePostUpdateOneWithoutDocumentsNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleDocumentUpdateWithoutOwnershipInputObjectSchema = Schema
