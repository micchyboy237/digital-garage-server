import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInput.schema"
import { MediaFileUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./MediaFileUncheckedUpdateManyWithoutOwnershipNestedInput.schema"
import { VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInputObjectSchema } from "./VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUncheckedUpdateWithoutVehicleInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    userId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
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
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    posts: z.lazy(() => VehiclePostUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleFiles: z.lazy(() => MediaFileUncheckedUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleDetails: z.lazy(() => VehicleDetailsUncheckedUpdateOneWithoutOwnershipNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUncheckedUpdateWithoutVehicleInputObjectSchema = Schema
