import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { VehicleOwnershipUpdateexcludedPhotosInputObjectSchema } from "./VehicleOwnershipUpdateexcludedPhotosInput.schema"
import { VehicleOwnershipUpdateexcludedVideosInputObjectSchema } from "./VehicleOwnershipUpdateexcludedVideosInput.schema"
import { VehicleOwnershipUpdateexcludedDocsInputObjectSchema } from "./VehicleOwnershipUpdateexcludedDocsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedUpdateManyInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicleId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    isCurrentOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicleDisplayPhotoId: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
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
  })
  .strict()

export const VehicleOwnershipUncheckedUpdateManyInputObjectSchema = Schema
