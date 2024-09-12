import { z } from "zod"
import { VehicleOwnershipCreateInputObjectSchema } from "./objects/VehicleOwnershipCreateInput.schema"
import { VehicleOwnershipUncheckedCreateInputObjectSchema } from "./objects/VehicleOwnershipUncheckedCreateInput.schema"

export const VehicleOwnershipCreateOneSchema = z.object({
  data: z.union([VehicleOwnershipCreateInputObjectSchema, VehicleOwnershipUncheckedCreateInputObjectSchema]),
})
