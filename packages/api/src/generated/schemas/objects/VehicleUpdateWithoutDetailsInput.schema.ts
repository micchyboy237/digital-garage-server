import { z } from "zod"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { UserUpdateOneWithoutVehiclesNestedInputObjectSchema } from "./UserUpdateOneWithoutVehiclesNestedInput.schema"
import { OwnershipUpdateManyWithoutVehicleNestedInputObjectSchema } from "./OwnershipUpdateManyWithoutVehicleNestedInput.schema"
import { VehicleTransferUpdateManyWithoutVehicleNestedInputObjectSchema } from "./VehicleTransferUpdateManyWithoutVehicleNestedInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.VehicleUpdateWithoutDetailsInput> = z
  .object({
    id: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    make: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    model: z.union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)]).optional(),
    owner: z.lazy(() => UserUpdateOneWithoutVehiclesNestedInputObjectSchema).optional(),
    ownerships: z.lazy(() => OwnershipUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
    transfers: z.lazy(() => VehicleTransferUpdateManyWithoutVehicleNestedInputObjectSchema).optional(),
  })
  .strict()

export const VehicleUpdateWithoutDetailsInputObjectSchema = Schema
