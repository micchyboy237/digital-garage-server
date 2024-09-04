import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { VehicleOwnershipUpdateexcludedPhotosInputObjectSchema } from "./VehicleOwnershipUpdateexcludedPhotosInput.schema"
import { VehicleOwnershipUpdateexcludedVideosInputObjectSchema } from "./VehicleOwnershipUpdateexcludedVideosInput.schema"
import { VehicleOwnershipUpdateexcludedDocsInputObjectSchema } from "./VehicleOwnershipUpdateexcludedDocsInput.schema"
import { UserUpdateOneWithoutVehicleOwnershipsNestedInputObjectSchema } from "./UserUpdateOneWithoutVehicleOwnershipsNestedInput.schema"
import { VehicleUpdateOneWithoutOwnershipsNestedInputObjectSchema } from "./VehicleUpdateOneWithoutOwnershipsNestedInput.schema"
import { VehiclePostUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehiclePostUpdateManyWithoutOwnershipNestedInput.schema"
import { MediaFileUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./MediaFileUpdateManyWithoutOwnershipNestedInput.schema"
import { VehicleDocumentUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehicleDocumentUpdateManyWithoutOwnershipNestedInput.schema"
import { VehicleDetailsUpdateOneWithoutOwnershipNestedInputObjectSchema } from "./VehicleDetailsUpdateOneWithoutOwnershipNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
    user: z.lazy(() => UserUpdateOneWithoutVehicleOwnershipsNestedInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleUpdateOneWithoutOwnershipsNestedInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehiclePhotos: z.lazy(() => MediaFileUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleDocuments: z.lazy(() => VehicleDocumentUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleDetails: z.lazy(() => VehicleDetailsUpdateOneWithoutOwnershipNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema = Schema
