import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { VehicleDetailsUpdateOneRequiredWithoutVehicleNestedInputObjectSchema } from "./VehicleDetailsUpdateOneRequiredWithoutVehicleNestedInput.schema"
import { VehicleOwnershipUpdateManyWithoutVehicleNestedInputObjectSchema } from "./VehicleOwnershipUpdateManyWithoutVehicleNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateWithoutDocumentsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    make: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    createdAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    updatedAt: z.union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)]).optional(),
    details: z.lazy(() => VehicleDetailsUpdateOneRequiredWithoutVehicleNestedInputObjectSchema).optional(),
    ownershipHistory: z.lazy(() => VehicleOwnershipUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUpdateWithoutDocumentsInputObjectSchema = Schema
