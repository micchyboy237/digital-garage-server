import { z } from "zod"
import { VehicleTransferCreateInputObjectSchema } from "./objects/VehicleTransferCreateInput.schema"
import { VehicleTransferUncheckedCreateInputObjectSchema } from "./objects/VehicleTransferUncheckedCreateInput.schema"

export const VehicleTransferCreateOneSchema = z.object({
  data: z.union([VehicleTransferCreateInputObjectSchema, VehicleTransferUncheckedCreateInputObjectSchema]),
})
