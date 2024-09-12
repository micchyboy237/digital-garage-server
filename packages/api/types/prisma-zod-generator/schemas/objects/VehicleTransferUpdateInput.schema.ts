import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { TransferStatusSchema } from "../enums/TransferStatus.schema"
import { EnumTransferStatusFieldUpdateOperationsInputObjectSchema } from "./EnumTransferStatusFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { VehicleTransferUpdateexcludedMediaFileTypesInputObjectSchema } from "./VehicleTransferUpdateexcludedMediaFileTypesInput.schema"
import { MediaFileTypeSchema } from "../enums/MediaFileType.schema"
import { VehicleUpdateOneWithoutTransfersNestedInputObjectSchema } from "./VehicleUpdateOneWithoutTransfersNestedInput.schema"
import { UserUpdateOneWithoutTransfersSentNestedInputObjectSchema } from "./UserUpdateOneWithoutTransfersSentNestedInput.schema"
import { UserUpdateOneWithoutTransfersReceivedNestedInputObjectSchema } from "./UserUpdateOneWithoutTransfersReceivedNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleTransferUpdateInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
    excludedMediaFileTypes: z
      .union([
        z.lazy(() => VehicleTransferUpdateexcludedMediaFileTypesInputObjectSchema),
        z.lazy(() => MediaFileTypeSchema).array(),
      ])
      .optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    vehicle: z.lazy(() => VehicleUpdateOneWithoutTransfersNestedInputObjectSchema).optional(),
    sender: z.lazy(() => UserUpdateOneWithoutTransfersSentNestedInputObjectSchema).optional(),
    recipient: z.lazy(() => UserUpdateOneWithoutTransfersReceivedNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleTransferUpdateInputObjectSchema = Schema
