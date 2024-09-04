import { z } from "zod"
import { VehicleDetailsCreateInputObjectSchema } from "./objects/VehicleDetailsCreateInput.schema"
import { VehicleDetailsUncheckedCreateInputObjectSchema } from "./objects/VehicleDetailsUncheckedCreateInput.schema"

export const VehicleDetailsCreateOneSchema = z.object({
  data: z.union([VehicleDetailsCreateInputObjectSchema, VehicleDetailsUncheckedCreateInputObjectSchema]),
})
