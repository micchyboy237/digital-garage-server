import { z } from "zod"
import { VehicleCreateInputObjectSchema } from "./objects/VehicleCreateInput.schema"
import { VehicleUncheckedCreateInputObjectSchema } from "./objects/VehicleUncheckedCreateInput.schema"

export const VehicleCreateOneSchema = z.object({
  data: z.union([VehicleCreateInputObjectSchema, VehicleUncheckedCreateInputObjectSchema]),
})
