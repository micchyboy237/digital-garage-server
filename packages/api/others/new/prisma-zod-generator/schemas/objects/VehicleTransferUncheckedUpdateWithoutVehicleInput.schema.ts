import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"
import { EnumTransferStatusFieldUpdateOperationsInputObjectSchema } from "./EnumTransferStatusFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { VehicleTransferUpdateexcludedPhotosInputObjectSchema } from "./VehicleTransferUpdateexcludedPhotosInput.schema"
import { VehicleTransferUpdateexcludedVideosInputObjectSchema } from "./VehicleTransferUpdateexcludedVideosInput.schema"
import { VehicleTransferUpdateexcludedDocsInputObjectSchema } from "./VehicleTransferUpdateexcludedDocsInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUncheckedUpdateWithoutVehicleInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    senderId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    recipientId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    status: z
      .union([z.lazy(() => TransferStatusSchema), z.lazy(() => EnumTransferStatusFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    transferDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    responseDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    reason: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    excludedPhotos: z.union([z.lazy(() => VehicleTransferUpdateexcludedPhotosInputObjectSchema), z.string().array()]).optional(),
    excludedVideos: z.union([z.lazy(() => VehicleTransferUpdateexcludedVideosInputObjectSchema), z.string().array()]).optional(),
    excludedDocs: z.union([z.lazy(() => VehicleTransferUpdateexcludedDocsInputObjectSchema), z.string().array()]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
  })
  .strict()

export const VehicleTransferUncheckedUpdateWithoutVehicleInputObjectSchema = Schema
