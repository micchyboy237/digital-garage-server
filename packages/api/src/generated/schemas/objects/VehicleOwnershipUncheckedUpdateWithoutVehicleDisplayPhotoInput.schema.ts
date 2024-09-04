import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { VehicleOwnershipUpdateexcludedPhotosInputObjectSchema } from "./VehicleOwnershipUpdateexcludedPhotosInput.schema"
import { VehicleOwnershipUpdateexcludedVideosInputObjectSchema } from "./VehicleOwnershipUpdateexcludedVideosInput.schema"
import { VehicleOwnershipUpdateexcludedDocsInputObjectSchema } from "./VehicleOwnershipUpdateexcludedDocsInput.schema"
import { VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInput.schema"
import { MediaFileUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./MediaFileUncheckedUpdateManyWithoutOwnershipNestedInput.schema"
import { VehicleDocumentUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehicleDocumentUncheckedUpdateManyWithoutOwnershipNestedInput.schema"
import { VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInputObjectSchema } from "./VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isCurrentOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    startDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    excludedPhotos: z.union([z.lazy(() => VehicleOwnershipUpdateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedVideos: z.union([z.lazy(() => VehicleOwnershipUpdateexcludedVideosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => VehicleOwnershipUpdateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    posts: z.lazy(() => VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehiclePhotos: z.lazy(() => MediaFileUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleDocuments: z.lazy(() => VehicleDocumentUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleDetails: z.lazy(() => VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedUpdateWithoutVehicleDisplayPhotoInputObjectSchema = Schema
