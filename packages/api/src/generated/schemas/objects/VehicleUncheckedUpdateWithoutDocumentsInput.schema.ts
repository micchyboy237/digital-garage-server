import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { VehicleOwnershipUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema } from "./VehicleOwnershipUncheckedUpdateManyWithoutVehicleNestedInput.schema"
import { VehicleEventUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema } from "./VehicleEventUncheckedUpdateManyWithoutVehicleNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedUpdateWithoutDocumentsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    make: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    registrationNumber: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    ownershipHistory: z.lazy(() => VehicleOwnershipUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
    events: z.lazy(() => VehicleEventUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedUpdateWithoutDocumentsInputObjectSchema = Schema
