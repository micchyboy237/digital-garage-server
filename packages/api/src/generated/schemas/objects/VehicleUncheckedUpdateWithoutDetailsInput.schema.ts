import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { OwnershipUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema } from "./OwnershipUncheckedUpdateManyWithoutVehicleNestedInput.schema"
import { VehicleTransferUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema } from "./VehicleTransferUncheckedUpdateManyWithoutVehicleNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUncheckedUpdateWithoutDetailsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    make: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    ownerId: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    ownerships: z.lazy(() => OwnershipUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferUncheckedUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUncheckedUpdateWithoutDetailsInputObjectSchema = Schema
