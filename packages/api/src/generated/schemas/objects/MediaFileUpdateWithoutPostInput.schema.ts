import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { EnumMediaFileTypeFieldUpdateOperationsInputObjectSchema } from "./EnumMediaFileTypeFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { VehicleOwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema } from "./VehicleOwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInput.schema"
import { VehicleOwnershipUpdateOneWithoutVehiclePhotosNestedInputObjectSchema } from "./VehicleOwnershipUpdateOneWithoutVehiclePhotosNestedInput.schema"
import { VehicleDocumentUpdateOneWithoutFileNestedInputObjectSchema } from "./VehicleDocumentUpdateOneWithoutFileNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.MediaFileUpdateWithoutPostInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    type: z
      .union([z.lazy(() => MediaFileTypeSchema), z.lazy(() => EnumMediaFileTypeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    mimeType: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    fileName: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    url: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    thumbnailUrl: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    displayPhotoOwnership: z.lazy(() => VehicleOwnershipUpdateOneWithoutVehicleDisplayPhotoNestedInputObjectSchema).optional(),
    ownership: z.lazy(() => VehicleOwnershipUpdateOneWithoutVehiclePhotosNestedInputObjectSchema).optional(),
    vehicleDocument: z.lazy(() => VehicleDocumentUpdateOneWithoutFileNestedInputObjectSchema).optional(),
  })
  .strict()

export const MediaFileUpdateWithoutPostInputObjectSchema = Schema
