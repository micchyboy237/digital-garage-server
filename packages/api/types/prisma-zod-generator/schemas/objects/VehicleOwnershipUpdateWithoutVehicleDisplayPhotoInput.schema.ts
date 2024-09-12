import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { NullableStringFieldUpdateOperationsInputObjectSchema } from "./NullableStringFieldUpdateOperationsInput.schema"
import { BoolFieldUpdateOperationsInputObjectSchema } from "./BoolFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { NullableDateTimeFieldUpdateOperationsInputObjectSchema } from "./NullableDateTimeFieldUpdateOperationsInput.schema"
import { UserUpdateOneWithoutVehicleOwnershipsNestedInputObjectSchema } from "./UserUpdateOneWithoutVehicleOwnershipsNestedInput.schema"
import { VehicleUpdateOneWithoutOwnershipsNestedInputObjectSchema } from "./VehicleUpdateOneWithoutOwnershipsNestedInput.schema"
import { VehiclePostUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./VehiclePostUpdateManyWithoutOwnershipNestedInput.schema"
import { MediaFileUpdateManyWithoutOwnershipNestedInputObjectSchema } from "./MediaFileUpdateManyWithoutOwnershipNestedInput.schema"
import { VehicleDetailsUpdateOneWithoutOwnershipNestedInputObjectSchema } from "./VehicleDetailsUpdateOneWithoutOwnershipNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    overview: z
      .union([z.string(), z.lazy(() => NullableStringFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    isCurrentOwner: z.union([z.boolean(), z.lazy(() => BoolFieldUpdateOperationsInputObjectSchema)]).optional(),
    startDate: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    endDate: z
      .union([z.coerce.date(), z.lazy(() => NullableDateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional()
      .nullable(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    user: z.lazy(() => UserUpdateOneWithoutVehicleOwnershipsNestedInputObjectSchema).optional(),
    vehicle: z.lazy(() => VehicleUpdateOneWithoutOwnershipsNestedInputObjectSchema).optional(),
    posts: z.lazy(() => VehiclePostUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleFiles: z.lazy(() => MediaFileUpdateManyWithoutOwnershipNestedInputObjectSchema).optional(),
    vehicleDetails: z.lazy(() => VehicleDetailsUpdateOneWithoutOwnershipNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleOwnershipUpdateWithoutVehicleDisplayPhotoInputObjectSchema = Schema
